namespace Taskify.Server.Features.Issues.Models
{
    using System.Collections.Generic;

    using Taskify.Server.Data.Enumerations;
    using Taskify.Server.Features.Identity.Models;
    using Taskify.Server.Features.Sprints.Models;

    public class IssueDetailsServiceModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsResolved { get; set; }

        public int? StoryPoins { get; set; }

        public string Priority { get; set; }

        public string Type { get; set; }

        public UserListingServerModel Reporter { get; set; }

        public UserListingServerModel Assignee { get; set; }

        public Status Status { get; set; }

        public SprintListingServiceModel Sprint { get; set; }

        public IssueListingServiceModel ParentIssue { get; set; }

        public IEnumerable<IssueListingServiceModel> ChildIssues { get; set; }
    }
}
