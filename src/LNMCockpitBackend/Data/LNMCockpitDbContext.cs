namespace LNMCockpit.Data
{
    using LNMCockpit.Data.Models;
    using Microsoft.EntityFrameworkCore;

    public class LNMCockpitDbContext : DbContext
    {
        public DbSet<LNMPrice> Models { get; set; }

        public LNMCockpitDbContext(DbContextOptions<LNMCockpitDbContext> options) : base(options) { }
    }
}
