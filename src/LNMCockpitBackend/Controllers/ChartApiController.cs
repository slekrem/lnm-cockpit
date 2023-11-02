namespace LNMCockpit.Controllers
{
    using LNMCockpit.Services;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using LNMCockpit.Models.Chart;
    using LNMCockpit.Models.LnMarkets;

    [Authorize]
    public class ChartApiController : ControllerBase
    {
        private readonly ILnMarketsService _lnMarketsService;

        public ChartApiController(ILnMarketsService lnMarketsService)
        {
            _lnMarketsService = lnMarketsService;
        }

        [AllowAnonymous]
        [Route("api/chart/data")]
        public async Task<IActionResult> ChartData(string view = "1m8h")
        {
            long fromView;
            var to = DateTime.UtcNow.ToUnixTimeInMilliseconds();
            Func<DateTime, DateTime> GroupByFunc = (x) => throw new Exception();
            switch (view)
            {
                case "24h1m":
                    fromView = DateTime.UtcNow.AddDays(-1).ToUnixTimeInMilliseconds();
                    GroupByFunc = (x) => Helper.RoundToNearestNMinutes(x, 1);
                    break;
                case "48h5m":
                    fromView = DateTime.UtcNow.AddDays(-2).ToUnixTimeInMilliseconds();
                    GroupByFunc = (x) => Helper.RoundToNearestNMinutes(x, 5);
                    break;
                case "7d1h":
                    fromView = DateTime.UtcNow.AddDays(-7).ToUnixTimeInMilliseconds();
                    GroupByFunc = (x) => Helper.RoundToNearestNMinutes(x, 60);
                    break;
                case "2w4h":
                    fromView = DateTime.UtcNow.AddDays(-14).ToUnixTimeInMilliseconds();
                    GroupByFunc = (x) => Helper.RoundToNearestNHour(x, 4);
                    break;
                case "1m8h":
                    fromView = DateTime.UtcNow.AddDays(-31).ToUnixTimeInMilliseconds();
                    GroupByFunc = (x) => Helper.RoundToNearestNHour(x, 8);
                    break;
                default:
                    return BadRequest(new { });
            }

            try
            {
                var priceHistoryPriceHistoryData = await _lnMarketsService
                    .FuturesGetPriceHistoryAsync(fromView, to);

                var grouppedPriceHistoryPriceHistoryData = priceHistoryPriceHistoryData
                    .GroupBy(x => GroupByFunc(x.DateTime)).ToList();

                var ohlcChartData = new List<OhlcChartModel>();
                IEnumerable<FuturesTradeModel>? openTradesData = null;
                IEnumerable<FuturesTradeModel>? runningTradesData = null;
                IEnumerable<FuturesTradeModel>? closedTradesData = null;

                var openTradesChartData = new List<TradeChartModel>();
                var runningTradesChartData = new List<TradeChartModel>();
                var closedTradesChartData = new List<TradeChartModel>();

                grouppedPriceHistoryPriceHistoryData.ForEach(x => ohlcChartData.Add(new OhlcChartModel(x.Key)
                {
                    O = x.First().Value,
                    H = x.Max(y => y.Value),
                    L = x.Min(y => y.Value),
                    C = x.Last().Value
                }));

                if (User?.Identity?.IsAuthenticated ?? false)
                {
                    var firstOhlcX = ohlcChartData.First().X;
                    openTradesData = await _lnMarketsService.FuturesGetOpenTradesAsync(fromView, to);
                    openTradesData = openTradesData.Where(x =>
                    {
                        if (x.creation_ts <= firstOhlcX)
                            return false;
                        var creationX = ohlcChartData.FirstOrDefault(y => y.X >= x.creation_ts)?.X ?? -1;
                        return creationX > 0 && creationX != ohlcChartData.Last().X;
                    });
                    openTradesData.ToList().ForEach(x =>
                    {
                        var creationX = ohlcChartData.Where(y => y.X >= x.creation_ts)
                            .ToList()
                            .FirstOrDefault()?.X ?? -1;
                        var lastX = ohlcChartData.Last().X;
                        if (creationX <= 0 || creationX == lastX)
                            return;

                        openTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = creationX,
                            Y = x.price,
                            Start = true,
                            BorderColor = "#ffa500",
                            Data = x,
                            Type = "price"
                        });
                        openTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = lastX,
                            Y = x.price,
                            Start = false,
                            BorderColor = "#ffa500",
                            Data = x,
                            Type = "price"
                        });

                        if (x.liquidation > 0)
                        {
                            openTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = creationX,
                                Y = x.liquidation,
                                Start = true,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "liquidation"
                            });
                            openTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = lastX,
                                Y = x.liquidation,
                                Start = false,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "liquidation"
                            });
                        }

                        if (x.stoploss > 0)
                        {
                            openTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = creationX,
                                Y = x.stoploss,
                                Start = true,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "stoploss"
                            });
                            openTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = lastX,
                                Y = x.stoploss,
                                Start = false,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "stoploss"
                            });
                        }

                        if (x.takeprofit > 0)
                        {
                            openTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = creationX,
                                Y = x.takeprofit,
                                Start = true,
                                BorderColor = "#00ff00",
                                Data = x,
                                Type = "takeprofit"
                            });
                            openTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = lastX,
                                Y = x.takeprofit,
                                Start = false,
                                BorderColor = "#00ff00",
                                Data = x,
                                Type = "takeprofit"
                            });
                        }
                    });

                    runningTradesData = await _lnMarketsService.FuturesGetRunningTradesAsync(fromView, to);
                    runningTradesData = runningTradesData.Where(x =>
                    {
                        if (x.market_filled_ts <= firstOhlcX)
                            return false;
                        var creationX = ohlcChartData.FirstOrDefault(y => y.X >= x.market_filled_ts)?.X ?? -1;
                        return creationX > 0 && creationX != ohlcChartData.Last().X;
                    });
                    runningTradesData.ToList().ForEach(x =>
                    {
                        var marketFilledX = ohlcChartData.Where(y => y.X >= x.market_filled_ts)
                            .ToList()
                            .FirstOrDefault()?.X ?? x.market_filled_ts;
                        var lastX = ohlcChartData.Last().X;
                        var lastC = ohlcChartData.Last().C;

                        runningTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = marketFilledX,
                            Y = x.price,
                            Start = true,
                            BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000",
                            Data = x,
                            Type = "price"
                        });
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = lastX,
                            Y = lastC,
                            Start = false,
                            BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000",
                            Data = x,
                            Type = "price"
                        });

                        if (x.liquidation > 0)
                        {
                            runningTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = marketFilledX,
                                Y = x.liquidation,
                                Start = true,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "liquidation"
                            });
                            runningTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = lastX,
                                Y = x.liquidation,
                                Start = false,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "liquidation",
                            });
                        }

                        if (x.stoploss > 0)
                        {
                            runningTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = marketFilledX,
                                Y = x.stoploss,
                                Start = true,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "stoploss"
                            });
                            runningTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = lastX,
                                Y = x.stoploss,
                                Start = false,
                                BorderColor = "#ff0000",
                                Data = x,
                                Type = "stoploss"
                            });
                        }

                        if (x.takeprofit > 0)
                        {
                            runningTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = marketFilledX,
                                Y = x.takeprofit,
                                Start = true,
                                BorderColor = "#00ff00",
                                Data = x,
                                Type = "takeprofit"
                            });
                            runningTradesChartData.Add(new TradeChartModel
                            {
                                Id = x.id,
                                X = lastX,
                                Y = x.takeprofit,
                                Start = false,
                                BorderColor = "#00ff00",
                                Data = x,
                                Type = "takeprofit"
                            });
                        }
                    });

                    closedTradesData = await _lnMarketsService.FuturesGetClosedTradesAsync(fromView, to); // wir müssen nach dem erstellungsdatum suchen....
                    closedTradesData = closedTradesData.Where(x => x.market_filled_ts >= firstOhlcX && !x.canceled);
                    closedTradesData.ToList().ForEach(x =>
                    {
                        var marketFilledX = ohlcChartData.Where(y => y.X >= x.market_filled_ts)
                            .ToList()
                            .FirstOrDefault()?.X ?? x.market_filled_ts;

                        var closedX = ohlcChartData.Where(y => y.X >= x.closed_ts)
                            .ToList()
                            .FirstOrDefault()?.X ?? x.closed_ts;

                        closedTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = marketFilledX,
                            Y = x.price,
                            Start = true,
                            BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000",
                            Data = x,
                            Type = "price"
                        });
                        closedTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = closedX,
                            Y = x.exit_price,
                            Start = false,
                            BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000",
                            Data = x,
                            Type = "price"
                        });
                    });
                }

                return Ok(new
                {
                    chartData = new
                    {
                        ohlcChartData,
                        openTradesChartData,
                        closedTradesChartData,
                        runningTradesChartData
                    },
                    tradesData = new
                    {
                        openTradesData,
                        closedTradesData,
                        runningTradesData,
                    },
                });
            }
            catch (Exception ex)
            {
                await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                return BadRequest(new { ex.Message });
            }
        }
    }
}
