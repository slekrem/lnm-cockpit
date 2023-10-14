
namespace LNMCockpit.Models.Chart
{
    using LNMCockpit.Models.LnMarkets;

    public class TradeChartModel
    {
        public string? Id { get; set; }

        public long X { get; set; }

        public decimal Y { get; set; }

        public bool Start { get; set; }

        public string? BorderColor { get; set; }

        public FuturesTradeModel? Data { get; set; }
    }
}
