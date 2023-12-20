namespace LNMCockpit.Controllers
{
    using LNMCockpit.Services;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Authorize]
    public class PlaygroundApiController : ControllerBase
    {
        private readonly ILnMarketsService _lnMarketsService;

        public PlaygroundApiController(ILnMarketsService lnMarketsService)
        {
            _lnMarketsService = lnMarketsService ?? throw new ArgumentNullException();
        }

        [Route("api/playground/asd")]
        public async Task<IActionResult> Asd()
        {
            var from = DateTime.UtcNow.AddDays(-1).ToUnixTimeInMilliseconds();
            var to = DateTime.UtcNow.ToUnixTimeInMilliseconds();
            var asd = await _lnMarketsService.FuturesGetRunningTradesAsync(from, to, 100);
            return Ok(asd);
        }

        [HttpPost]
        [Route("api/playground/new-trade")]
        public async Task<IActionResult> TestAsd(string side)
        {
            var asd = await _lnMarketsService.FuturesNewTrade(side, "m", 100);
            return Ok(asd);
        }

        [HttpPost]
        [Route("api/playground/close-trade")]
        public async Task<IActionResult> CloseTrade(string id)
        {
            var result = await _lnMarketsService.FuturesCloseTrade(id);
            return Ok(result);
        }
    }
}
