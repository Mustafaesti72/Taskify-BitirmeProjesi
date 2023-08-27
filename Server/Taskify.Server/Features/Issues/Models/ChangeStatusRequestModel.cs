namespace Taskify.Server.Features.Issues.Models
{
    using Taskify.Server.Data.Enumerations;

    public class ChangeStatusRequestModel
    {
        public Status Status { get; set; }

        public int StatusIndex { get; set; }
    }
}
