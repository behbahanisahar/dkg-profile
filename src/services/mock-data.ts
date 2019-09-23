import UserInfoDTO from "../entities/UserProfile";
import UserTasks from "../entities/UserTasks";

export default class MockData {
  public static UserInfo: UserInfoDTO = {
    UserName: "Sahar Behbahani",
    FirstName: "sahar",
    LastName: "B",
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
