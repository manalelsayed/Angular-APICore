using Microsoft.EntityFrameworkCore;
using PersonAddressAPI.Models;

namespace PersonAddressAPI.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}

        public DbSet<Person> People {get; set;}
        public DbSet<Address> Address {get; set;}   
    }
}
