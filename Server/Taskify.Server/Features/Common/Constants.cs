namespace Taskify.Server.Features.Common
{
    public static class Constants
    {
        public const string DeactivatedTokenString = "token: {0} deactivated";
        public const string DefaultSprintName = "Sprint {0}";

       public static class Errors
{
    public const string UnuthorizedUser = "Yetkilendirilmemiş kullanıcı veya geçersiz proje kimliği";
    public const string AlreadyRegisteredUser = "E-posta: {0} ile kayıtlı bir kullanıcı zaten var.";
    public const string AlreadyRegisteredUserName = "Kullanıcı adı: {0} ile kayıtlı bir kullanıcı zaten var.";
    public const string InvalidUserName = "Geçersiz kullanıcı adı.";
    public const string InvalidUserId = "Geçersiz kullanıcı kimliği.";
    public const string InvalidLoginAttempt = "Geçersiz e-posta veya parola.";
    public const string InvalidProjectId = "Geçersiz proje kimliği.";
    public const string InvalidTeamId = "Geçersiz ekip kimliği.";
    public const string InvalidSprintId = "Geçersiz sprint kimliği.";
    public const string InvalidTeamIdOrUserId = "Geçersiz kullanıcı veya ekip kimliği.";
    public const string InvalidIssueId = "Geçersiz görev Kimliği";
    public const string InvalidStatusId = "Geçersiz durum Kimliği";
    public const string InvalidInvitationId = "Geçersiz davet Kimliği";
    public const string InvalidInvitation = "Kendinizi davet etmeye çalışıyorsunuz!";
    public const string InvalidInvitationEmail = "Bu e-posta ile kayıtlı bir kullanıcı bulunmamaktadır.";
    public const string AlredySendedInvitation = "Bu kullanıcıya zaten davet gönderilmiştir.";
    public const string InvalidUserOrProjectId = "Geçersiz kullanıcı veya proje kimliği.";
}


        public static class Claims
        {
            public const string Admin = "Admin";
            public const string Team = "Team";
        }

        public static class Redis
        {
            public const string Connection = "localhost";
            public const int Port = 6379;
            public const string Channel = "Taskify";
        }

        public static class HubEvents
        {
            public const string BoardUpdate = "BoardUpdate";
            public const string BacklogUpdate = "BacklogUpdate";
            public const string DeletedProjectUpdate = "DeletedProjectUpdate";
            public const string SprintCompletedUpdate = "SprintCompletedUpdate";
            public const string UnAcceptedInvitationsUpdate = "UnAcceptedInvitationsUpdate";
        }
    }
}
