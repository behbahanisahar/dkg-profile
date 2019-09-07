import ServiceBase from "./service-base";

export class AppRestService extends ServiceBase {
  public async getUserInfoDTO(): Promise<any> {
    const items: any = await this.get("users/current");
    return Promise.resolve(items.data);
  }
}
export default AppRestService;
