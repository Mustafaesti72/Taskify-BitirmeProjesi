﻿namespace Taskify.Server.Features.Sprints.Models
{
    using System;
    using System.Collections.Generic;

    using Taskify.Server.Features.Issues.Models;

    public class SprintWithIssuesServiceModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public bool Active { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public string Goal { get; set; }

        public virtual IEnumerable<IssueListingServiceModel> Issues { get; set; }
    }
}
