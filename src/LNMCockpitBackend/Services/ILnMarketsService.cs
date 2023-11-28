namespace LNMCockpit.Services
{
    using LNMCockpit.Models.LnMarkets;

    public interface ILnMarketsService
    {
        Task<IEnumerable<FuturesPriceHistoryModel>> FuturesGetPriceHistoryAsync(long from, long to, int limit = int.MaxValue);

        Task<IEnumerable<FuturesTradeModel>> FuturesGetOpenTradesAsync(long from, long to, int limit = int.MaxValue);

        Task<IEnumerable<FuturesTradeModel>> FuturesGetClosedTradesAsync(long from, long to, int limit = int.MaxValue);

        Task<IEnumerable<FuturesTradeModel>> FuturesGetRunningTradesAsync(long from, long to, int limit = int.MaxValue);

        Task<bool> FuturesNewTrade(string side, string type, int leverage);

        Task<bool> FuturesCloseTrade(string id);
    }
}
