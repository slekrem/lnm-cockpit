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
        public async Task<IActionResult> ChartData()
        {
            var from = DateTime.UtcNow.AddDays(-1).ToUnixTimeInMilliseconds();
            var to = DateTime.UtcNow.ToUnixTimeInMilliseconds();
            try
            {
                var priceHistoryPriceHistoryData = await _lnMarketsService
                    .FuturesGetPriceHistoryAsync(from, to);
                var grouppedPriceHistoryPriceHistoryData = priceHistoryPriceHistoryData
                    .GroupBy(x => Helper.RoundToNearestNMinutes(x.DateTime, 1))
                    .ToList();
                var ohlcChartData = new List<OhlcChartModel>();
                grouppedPriceHistoryPriceHistoryData.ForEach(x => ohlcChartData.Add(new OhlcChartModel(x.Key)
                {
                    O = x.First().Value,
                    H = x.Max(y => y.Value),
                    L = x.Min(y => y.Value),
                    C = x.Last().Value
                }));

                var openTradesChartData = new List<TradeChartModel>();
                var openTradesData = await _lnMarketsService.FuturesGetOpenTradesAsync(from, to);
                openTradesData.ToList().ForEach(x =>
                {
                    openTradesChartData.Add(new TradeChartModel
                    {
                        X = x.creation_ts - 7200000,
                        Y = x.price,
                        Start = true,
                        BorderColor = x.type == "l" ? "#00ff00" : "ff0000"
                    });
                    openTradesChartData.Add(new TradeChartModel
                    {
                        X = ohlcChartData.Last().X,
                        Y = x.price,
                        Start = false,
                        BorderColor = x.type == "l" ? "#00ff00" : "ff0000"
                    });

                    if (x.liquidation > 0)
                    {
                        openTradesChartData.Add(new TradeChartModel
                        {
                            X = x.creation_ts - 7200000,
                            Y = x.liquidation,
                            Start = true,
                            BorderColor = "#ff0000"
                        });
                        openTradesChartData.Add(new TradeChartModel
                        {
                            X = ohlcChartData.Last().X,
                            Y = x.liquidation,
                            Start = false,
                            BorderColor = "#ff0000"
                        });
                    }

                    if (x.stoploss > 0)
                    {
                        openTradesChartData.Add(new TradeChartModel
                        {
                            X = x.creation_ts - 7200000,
                            Y = x.stoploss,
                            Start = true,
                            BorderColor = "#ff0000"
                        });
                        openTradesChartData.Add(new TradeChartModel
                        {
                            X = ohlcChartData.Last().X,
                            Y = x.stoploss,
                            Start = false,
                            BorderColor = "#ff0000"
                        });
                    }

                    if (x.takeprofit > 0)
                    {
                        openTradesChartData.Add(new TradeChartModel
                        {
                            X = x.creation_ts - 7200000,
                            Y = x.takeprofit,
                            Start = true,
                            BorderColor = "#00ff00"
                        });
                        openTradesChartData.Add(new TradeChartModel
                        {
                            X = ohlcChartData.Last().X,
                            Y = x.takeprofit,
                            Start = false,
                            BorderColor = "#00ff00"
                        });
                    }
                });

                var runningTradesChartData = new List<TradeChartModel>();
                var runningTradesData = await _lnMarketsService.FuturesGetRunningTradesAsync(from, to);
                runningTradesData.ToList().ForEach(x =>
                {
                    runningTradesChartData.Add(new TradeChartModel
                    {
                        X = (x.market_filled_ts - 7200000) < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts - 7200000,
                        Y = x.price,
                        Start = true,
                        BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000"
                    });
                    runningTradesChartData.Add(new TradeChartModel
                    {
                        X = ohlcChartData.Last().X,
                        Y = ohlcChartData.Last().C,
                        Start = false,
                        BorderColor = x.pl > 0 ? "#00ff00" : "#ff0000"
                    });

                    if (x.liquidation > 0)
                    {
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            X = (x.market_filled_ts - 7200000) < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts - 7200000,
                            Y = x.liquidation,
                            Start = true,
                            BorderColor = "#ff0000"
                        });
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            X = ohlcChartData.Last().X,
                            Y = x.liquidation,
                            Start = false,
                            BorderColor = "#ff0000"
                        });
                    }

                    if (x.stoploss > 0)
                    {
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            X = (x.market_filled_ts - 7200000) < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts - 7200000,
                            Y = x.stoploss,
                            Start = true,
                            BorderColor = "#ff0000"
                        });
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            X = ohlcChartData.Last().X,
                            Y = x.stoploss,
                            Start = false,
                            BorderColor = "#ff0000"
                        });
                    }

                    if (x.takeprofit > 0)
                    {
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            X = (x.market_filled_ts - 7200000) < ohlcChartData.First().X ? ohlcChartData.First().X : x.market_filled_ts - 7200000,
                            Y = x.takeprofit,
                            Start = true,
                            BorderColor = "#00ff00"
                        });
                        runningTradesChartData.Add(new TradeChartModel
                        {
                            X = ohlcChartData.Last().X,
                            Y = x.takeprofit,
                            Start = false,
                            BorderColor = "#00ff00"
                        });
                    }
                });

                var closedTradesChartData = new List<TradeChartModel>();
                var closedTradesData = await _lnMarketsService.FuturesGetClosedTradesAsync(from, to);
                closedTradesData.Where(x => !x.canceled).ToList().ForEach(x =>
                {
                    closedTradesChartData.Add(new TradeChartModel
                    {
                        X = x.creation_ts,
                        Y = x.price,
                        Start = true,
                        BorderColor = x.pl > 0 ? "#00ff00" : "ff0000"
                    });
                    closedTradesChartData.Add(new TradeChartModel
                    {
                        X = x.closed_ts,
                        Y = x.exit_price,
                        Start = false,
                        BorderColor = x.pl > 0 ? "#00ff00" : "ff0000"
                    });
                });

                return Ok(new
                {
                    ohlcChartData,
                    openTradesChartData,
                    closedTradesChartData,
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
