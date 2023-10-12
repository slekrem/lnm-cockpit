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
                var ohlcData = new List<OhlcChartModel>();
                grouppedPriceHistoryPriceHistoryData.ForEach(x => ohlcData.Add(new OhlcChartModel(x.Key)
                {
                    O = x.First().Value,
                    H = x.Max(y => y.Value),
                    L = x.Min(y => y.Value),
                    C = x.Last().Value
                }));

                return Ok(new 
                {
                    ohlcData
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
