using LNMCockpit.Services;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<ILnMarketsService, LnMarketsService>();

builder.Services.AddControllers();
builder.Services.AddHttpContextAccessor();
builder.Services
    .AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(x =>
    {
        x.Cookie.Name = ".lnmc.auth";
        x.Cookie.HttpOnly = true;
        x.Cookie.MaxAge = TimeSpan.FromDays(1);
        x.Cookie.SameSite = SameSiteMode.Strict;
    });

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseDefaultFiles()
    .UseStaticFiles()
    .UseAuthentication()
    .UseAuthorization()
    .UseHttpsRedirection();

app.MapControllers();
app.Run();