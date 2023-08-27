namespace Taskify.Server.Features.Sprints.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    using static Taskify.Server.Data.Common.Constants.Sprint;

    public class UpdateSprintRequestModel
    {
        [MinLength(TitleMinLength)]
        [MaxLength(TitleMaxLength)]
        public string Title { get; set; }

        public string Goal { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }
    }
}
