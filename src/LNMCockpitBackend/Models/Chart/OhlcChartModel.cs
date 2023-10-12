namespace LNMCockpit.Models.Chart
{
    public class OhlcChartModel
    {
        private readonly DateTime _dateTime;

        public OhlcChartModel(DateTime dateTime)
        {
            _dateTime = dateTime;
        }

        public decimal O { get; set; }
        public decimal H { get; set; }
        public decimal L { get; set; }
        public decimal C { get; set; }
        public int V { get; set; }
        public long X => _dateTime.ToUnixTimeInMilliseconds();
        public DateTime DateTime => _dateTime;
    }
}
