namespace Taskify.Server.Infrastructure.Extentions
{
    using Taskify.Server.Data;
    using Taskify.Server.Data.Common;
    using Taskify.Server.Infrastructure.Middlewares;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;

    using static Taskify.Server.Infrastructure.ApiRoutes;

    public static class ApplicationBuilderExtention
    {
        public static IApplicationBuilder UseSwaggerUI(this IApplicationBuilder app)
            => app
                .UseSwagger()
                .UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Taskify API");
                    options.RoutePrefix = string.Empty;
                });

        public static IApplicationBuilder UseTokenCheckMiddleware(this IApplicationBuilder app)
            => app.UseWhen(
                httpContext => !httpContext.Request.Path.StartsWithSegments('/' + Identity.IdentityRoute),
                subApp => subApp.UseMiddleware<TokenManagerMiddleware>());

        public static IApplicationBuilder UseOptionsMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<OptionRequestsMiddleware>();
        }

        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            using var services = app.ApplicationServices.CreateScope();

            var dbContext = services.ServiceProvider.GetService<TaskifyDbContext>();
            dbContext.Database.Migrate();
            new DbContextSeeder().SeedAsync(dbContext, services.ServiceProvider).GetAwaiter().GetResult();
        }
    }
}
