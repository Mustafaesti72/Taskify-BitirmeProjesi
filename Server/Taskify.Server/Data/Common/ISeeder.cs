namespace Taskify.Server.Data.Common
{
    using System;
    using System.Threading.Tasks;

    public interface ISeeder
    {
        Task SeedAsync(TaskifyDbContext dbContext, IServiceProvider serviceProvider);
    }
}
