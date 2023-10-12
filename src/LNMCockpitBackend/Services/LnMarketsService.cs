namespace LNMCockpit.Services
{
    using LNMCockpit.Models.LnMarkets;
    using System.Security.Cryptography;
    using System.Text;

    public class LnMarketsService : ILnMarketsService
    {
        private readonly string _lnMarketsEndpoint = "https://api.lnmarkets.com";
        private readonly IHttpContextAccessor _httpContextAccessor;

        public LnMarketsService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<IEnumerable<FuturesPriceHistoryModel>> FuturesGetPriceHistoryAsync(long from, long to, int limit = int.MaxValue)
        {
            var method = "GET";
            var path = "/v2/futures/history/price";
            var @params = $"from={from}&to={to}&limit={limit}";
            var timestamp = GetTimestamp();

            using var client = GetLnMarketsHttpClient(GetSignature($"{timestamp}{method}{path}{@params}"), timestamp);
            var data = await client.GetFromJsonAsync<IEnumerable<FuturesPriceHistoryModel>>($"{_lnMarketsEndpoint}{path}?{@params}");
            data = data?.OrderBy(x => x.Time).ToList() ?? new List<FuturesPriceHistoryModel>();
            return data;
        }

        public async Task<IEnumerable<FuturesTradeModel>> FuturesGetOpenTradesAsync(long from, long to, int limit = int.MaxValue)
        {
            var method = "GET";
            var path = "/v2/futures";
            var @params = $"type=open&from={from}&to={to}&limit={limit}";
            var timestamp = GetTimestamp();

            using var client = GetLnMarketsHttpClient(GetSignature($"{timestamp}{method}{path}{@params}"), timestamp);
            var data = await client.GetFromJsonAsync<IEnumerable<FuturesTradeModel>>($"{_lnMarketsEndpoint}{path}?{@params}") ?? new List<FuturesTradeModel>();
            return data.ToList();
        }

        public async Task<IEnumerable<FuturesTradeModel>> FuturesGetClosedTradesAsync(long from, long to, int limit = int.MaxValue)
        {
            var method = "GET";
            var path = "/v2/futures";
            var @params = $"type=closed&from={from}&to={to}&limit={limit}";
            var timestamp = GetTimestamp();

            using var client = GetLnMarketsHttpClient(GetSignature($"{timestamp}{method}{path}{@params}"), timestamp);
            var data = await client.GetFromJsonAsync<IEnumerable<FuturesTradeModel>>($"{_lnMarketsEndpoint}{path}?{@params}") ?? new List<FuturesTradeModel>();
            return data.ToList();
        }

        public async Task<IEnumerable<FuturesTradeModel>> FuturesGetRunningTradesAsync(long from, long to, int limit = int.MaxValue)
        {
            var method = "GET";
            var path = "/v2/futures";
            var @params = $"type=running&from={from}&to={to}&limit={limit}";
            var timestamp = GetTimestamp();

            using var client = GetLnMarketsHttpClient(GetSignature($"{timestamp}{method}{path}{@params}"), timestamp);
            var data = await client.GetFromJsonAsync<IEnumerable<FuturesTradeModel>>($"{_lnMarketsEndpoint}{path}?{@params}") ?? new List<FuturesTradeModel>();
            return data.ToList();
        }

        private string GetSignature(string payload)
        {
            var secret = _httpContextAccessor.HttpContext?.User.Claims
                .FirstOrDefault(x => x.Type == "secret")?.Value ?? string.Empty;
            using var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(secret));
            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(payload));
            return Convert.ToBase64String(hash);
        }

        private HttpClient GetLnMarketsHttpClient(string signature, long timestamp)
        {
            var httpClient = new HttpClient();
            var key = _httpContextAccessor.HttpContext?.User.Claims
                .FirstOrDefault(x => x.Type == "key")?.Value ?? string.Empty;
            var passphrase = _httpContextAccessor.HttpContext?.User.Claims
                .FirstOrDefault(x => x.Type == "passphrase")?.Value ?? string.Empty;

            httpClient.DefaultRequestHeaders.Add("LNM-ACCESS-KEY", key);
            httpClient.DefaultRequestHeaders.Add("LNM-ACCESS-PASSPHRASE", passphrase);
            httpClient.DefaultRequestHeaders.Add("LNM-ACCESS-SIGNATURE", signature);
            httpClient.DefaultRequestHeaders.Add("LNM-ACCESS-TIMESTAMP", timestamp.ToString());
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");

            return httpClient;
        }

        private static long GetTimestamp() => (long)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds;
    }
}
