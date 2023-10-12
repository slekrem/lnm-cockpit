namespace LNMCockpit.Models.Chart
{
    public class TradeChartModel
    {
        public long X { get; set; }

        public decimal Y { get; set; }

        public bool Start { get; set; }

        public string? BorderColor { get; set; }
    }
}
