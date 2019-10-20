import UserInfoDTO from "../entities/UserProfile";
import UserTasks from "../entities/UserTasks";

export default class MockData {
  public static UserInfo: UserInfoDTO = {
    UserName: "sa.behbahani",
    FirstName: "sahar",
    LastName: "behbahani",
    AvatarUrl: "http://hq-spsrv03:90/SiteAssets/pic.png",
    JobStatus: "sharepoint developer",
    EmailAddress: "sa.behbahani@digikala.com",
    MobileNumber: "09120286220",
    FullAddress: "saadatabad str, kaj sq,Tehran,Iran",
    BirthPlace: "tehran",
  };

  public static UserTasks: UserTasks[] = [
    {
      Url: "/apps/survey/index.aspx?itemId=5",
      Title: "Sahar Behbahani",
      UserId: 9,
      Module: "Survey360",
    },
    {
      Url: "/apps/survey/index.aspx?itemId=5",
      Title: "Ali nooshabadi",
      UserId: 1,
      Module: "Survey360",
    },
  ];
}
