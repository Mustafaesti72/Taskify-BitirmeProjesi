namespace Taskify.Server.Features.Projects.Models
{
    using System.Collections.Generic;

    using Taskify.Server.Features.Identity.Models;
    using Taskify.Server.Features.Issues.Models;
    using Taskify.Server.Features.Sprints.Models;

    public class ProjectDetailsServiceModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public string Key { get; set; }

        public bool IsCreator { get; set; }

        public IEnumerable<IssueListingServiceModel> Issues { get; set; }

        public IEnumerable<SprintWithIssuesServiceModel> Sprints { get; set; }
    }
}
