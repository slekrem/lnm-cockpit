namespace LNMCockpit.Services
{
    using LNMCockpit.Models.LnMarkets;

    public interface ILnMarketsService
    {
        Task<IEnumerable<FuturesPriceHistoryModel>> FuturesGetPriceHistoryAsync(long from, long to, int limit = int.MaxValue);
    }
}
