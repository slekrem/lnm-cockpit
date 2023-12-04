namespace LNMCockpit.Controllers
{
    using LNMCockpit.Models.Chart;
    using LNMCockpit.Services;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Authorize]
    public class CopilotApiController : ControllerBase
    {
        private readonly ILnMarketsService _lnMarketsService;

        public CopilotApiController(ILnMarketsService lnMarketsService)
        {
            _lnMarketsService = lnMarketsService;
        }

        [HttpPost]
        [Route("api/copilot/create-market-order")]
        public async Task<IActionResult> CreateMarketOrder(string side)
        {
            var result = await _lnMarketsService.FuturesNewTrade(side, "m", 100);
            return Ok(new { result });
        }

        [HttpPost]
        [Route("api/copilot/close-trade")]
        public async Task<IActionResult> CloseTrade(string id)
        {
            var result = await _lnMarketsService.FuturesCloseTrade(id);
            return Ok(new { result });
        }

        [Route("api/copilot/test")]
        [HttpGet]
        public async Task<IActionResult> Test()
        {
            var from = DateTime.UtcNow.AddDays(-31).ToUnixTimeInMilliseconds();
            var to = DateTime.UtcNow.ToUnixTimeInMilliseconds();

            var history = await _lnMarketsService.FuturesGetPriceHistoryAsync(from, to, 30000);
            var groupedHistory = history.GroupBy(x => Helper.RoundToNearestNMinutes(x.DateTime, 1)).ToList();
            var ohlcData = new List<OhlcChartModel>();
            groupedHistory.ForEach(x => ohlcData.Add(new OhlcChartModel(x.Key)
            {
                O = x.First().Value,
                H = x.Max(y => y.Value),
                L = x.Min(y => y.Value),
                C = x.Last().Value
            }));

            return Ok(ohlcData);
        }
    }
}
