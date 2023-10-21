namespace LNMCockpit.Controllers
{
    using LNMCockpit.Services;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using LNMCockpit.Models.Chart;

    [Authorize]
    public class ChartApiController : ControllerBase
    {
        private readonly ILnMarketsService _lnMarketsService;

        public ChartApiController(ILnMarketsService lnMarketsService)
        {
            _lnMarketsService = lnMarketsService;
        }

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
                grouppedPriceHistoryPriceHistoryData.ForEach(x => ohlcChartData.Add(new OhlcChartModel(x.Key)
                {
                    O = x.First().Value,
                    H = x.Max(y => y.Value),
                    L = x.Min(y => y.Value),
                    C = x.Last().Value
                }));

                var openTradesChartData = new List<TradeChartModel>();
                var openTradesData = await _lnMarketsService.FuturesGetOpenTradesAsync(fromView, to);
                openTradesData.ToList().ForEach(x =>
                {
                    openTradesChartData.Add(new TradeChartModel
                    {
                        Id = x.id,
                        X = x.creation_ts,
                        Y = x.price,
                        Start = true,
                        BorderColor = "#ffa500", // x.type == "l" ? "#00ff00" : "#ff0000",
                        Data = x,
                        Type = "price"
                    });
                    openTradesChartData.Add(new TradeChartModel
                    {
                        Id = x.id,
                        X = ohlcChartData.Last().X,
                        Y = x.price,
                        Start = false,
                        BorderColor = "#ffa500", // x.type == "l" ? "#00ff00" : "#ff0000",
                        Data = x,
                        Type = "price"
                    });

                    if (x.liquidation > 0)
                    {
                        openTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = x.creation_ts,
                            Y = x.liquidation,
                            Start = true,
                            BorderColor = "#ff0000",
                            Data = x,
                            Type = "liquidation"
                        });
                        openTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = ohlcChartData.Last().X,
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
                            X = x.creation_ts,
                            Y = x.stoploss,
                            Start = true,
                            BorderColor = "#ff0000",
                            Data = x,
                            Type = "stoploss"
                        });
                        openTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = ohlcChartData.Last().X,
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
                            X = x.creation_ts,
                            Y = x.takeprofit,
                            Start = true,
                            BorderColor = "#00ff00",
                            Data = x,
                            Type = "takeprofit"
                        });
                        openTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = ohlcChartData.Last().X,
                            Y = x.takeprofit,
                            Start = false,
                            BorderColor = "#00ff00",
                            Data = x,
                            Type = "takeprofit"
                        });
                    }
                });

                var runningTradesChartData = new List<TradeChartModel>();
                var runningTradesData = await _lnMarketsService.FuturesGetRunningTradesAsync(fromView, to);
                runningTradesData.ToList().ForEach(x =>
                {
                    runningTradesChartData.Add(new TradeChartModel
                    {
                        Id = x.id,
                        X = x.market_filled_ts < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts,
                        Y = x.price,
                        Start = true,
                        BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000",
                        Data = x,
                        Type = "price"
                    });
                    runningTradesChartData.Add(new TradeChartModel
                    {
                        Id = x.id,
                        X = ohlcChartData.Last().X,
                        Y = ohlcChartData.Last().C,
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
                            X = x.market_filled_ts < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts,
                            Y = x.liquidation,
                            Start = true,
                            BorderColor = "#ff0000",
                            Data = x,
                            Type = "liquidation"
                        });
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = ohlcChartData.Last().X,
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
                            X = x.market_filled_ts < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts,
                            Y = x.stoploss,
                            Start = true,
                            BorderColor = "#ff0000",
                            Data = x,
                            Type = "stoploss"
                        });
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = ohlcChartData.Last().X,
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
                            X = x.market_filled_ts < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts,
                            Y = x.takeprofit,
                            Start = true,
                            BorderColor = "#00ff00",
                            Data = x,
                            Type = "takeprofit"
                        });
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            Id = x.id,
                            X = ohlcChartData.Last().X,
                            Y = x.takeprofit,
                            Start = false,
                            BorderColor = "#00ff00",
                            Data = x,
                            Type = "takeprofit"
                        });
                    }
                });

                var closedTradesChartData = new List<TradeChartModel>();
                var closedTradesData = await _lnMarketsService.FuturesGetClosedTradesAsync(fromView, to); // wir müssen nach dem erstellungsdatum suchen....
                closedTradesData = closedTradesData.Where(x => !x.canceled);
                closedTradesData.ToList().ForEach(x =>
                {
                    closedTradesChartData.Add(new TradeChartModel
                    {
                        Id = x.id,
                        X = x.market_filled_ts,
                        Y = x.price,
                        Start = true,
                        BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000",
                        Data = x,
                        Type = "price"
                    });
                    closedTradesChartData.Add(new TradeChartModel
                    {
                        Id = x.id,
                        X = x.closed_ts,
                        Y = x.exit_price,
                        Start = false,
                        BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000",
                        Data = x,
                        Type = "price"
                    });
                });

                return Ok(new
                {
                    ohlcChartData,

                    openTradesData,
                    openTradesChartData,

                    closedTradesData,
                    closedTradesChartData,

                    runningTradesData,
                    runningTradesChartData
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
