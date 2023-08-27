namespace Taskify.Server.Features.Teams.Models
{
    using System.Collections.Generic;

    using Taskify.Server.Features.Identity.Models;
    using Taskify.Server.Features.Invitations.Models;

    public class TeamDetailsServiceModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string ImageUrl { get; set; }

        public IEnumerable<UserDetailsServiceModel> TeamUsers { get; set; }

        public IEnumerable<InvitationUserServiceModel> Invitations { get; set; }
    }
}
