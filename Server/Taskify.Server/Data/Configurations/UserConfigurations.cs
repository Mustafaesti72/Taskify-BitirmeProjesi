namespace Taskify.Server.Data.Configurations
{
    using Taskify.Server.Data.Models;

    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    public class UserConfigurations : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> user)
        {
            user.HasMany(x => x.TeamsUsers)
                .WithOne(x => x.User)
                .HasForeignKey(x => x.UserId);

            user.HasMany(x => x.ProjectsAdmins)
                .WithOne(x => x.User)
                .HasForeignKey(x => x.UserId);
        }
    }
}
