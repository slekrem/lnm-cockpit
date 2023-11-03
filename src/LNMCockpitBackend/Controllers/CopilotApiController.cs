namespace LNMCockpit.Controllers
{
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
    }
}
