import ServiceBase from "./service-base";
import MockData from "./mock-data";

export class AppRestService extends ServiceBase {
  public async getUserInfoDTO(): Promise<any> {
    if (process.env.NODE_ENV === "production") {
      const items: any = await this.get("users/current");
      return Promise.resolve(items.data);
    }
    return Promise.resolve(MockData.UserInfo);
  }
  /*****************get current user tasks********************************************* */
  public async getUserTasks(): Promise<any> {
    if (process.env.NODE_ENV === "production") {
      const items: any = await this.get("users/current/tasks");
      console.log(items);
      return Promise.resolve(items.data);
    }
    return Promise.resolve(MockData.UserTasks);
  }
}
export default AppRestService;
