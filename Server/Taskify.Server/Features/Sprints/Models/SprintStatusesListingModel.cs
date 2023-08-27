namespace Taskify.Server.Features.Sprints.Models
{
    using System.Collections.Generic;

    using Taskify.Server.Features.Issues.Models;

    public class SprintStatusesListingModel
    {
        public string Title { get; set; }

        public virtual IEnumerable<IssueListingServiceModel> Issues { get; set; }
    }
}
