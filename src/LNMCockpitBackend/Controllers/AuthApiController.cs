namespace LNMCockpit.Controllers
{
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Security.Claims;

    [Authorize]
    public class AuthApiController : ControllerBase
    {
        [AllowAnonymous]
        [Route("api/auth/is-authenticated")]
        public IActionResult IsAuthenticated() => Ok(new { IsAuthenticated = User?.Identity?.IsAuthenticated ?? false });

        [HttpPost]
        [AllowAnonymous]
        [Route("api/auth/login")]
        public async Task<IActionResult> Login(string secret = "", string key = "", string passphrase = "")
        {
            var claims = new List<Claim>
            {
                new Claim(nameof(secret), secret),
                new Claim(nameof(key), key),
                new Claim(nameof(passphrase), passphrase),
            };

            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var authProperties = new AuthenticationProperties { };
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);
            return Ok(new { });
        }

        [HttpPost]
        [Route("api/auth/logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok(new { });
        }
    }
}
