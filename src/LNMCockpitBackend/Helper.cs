namespace LNMCockpit
{
    public static class Helper
    {
        public static long ToUnixTimeInMilliseconds(this DateTime dateTime)
            => (long)dateTime.Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds;

        public static DateTime RoundToNearestNMinutes(DateTime dateTime, int NinMinutes)
        {
            var minute = dateTime.Minute;
            var remainder = minute % NinMinutes;
            if (remainder != 0)
                dateTime = dateTime.AddMinutes(NinMinutes - remainder);
            return new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, dateTime.Hour, dateTime.Minute, 0);
        }

        public static DateTime RoundToNearestNHour(DateTime dateTime, int NinHour)
        {
            var minute = dateTime.Hour;
            var remainder = minute % NinHour;
            if (remainder != 0)
                dateTime = dateTime.AddHours(NinHour - remainder);
            var dt = new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, dateTime.Hour, 0, 0);
            return dt;
        }

    }
}
