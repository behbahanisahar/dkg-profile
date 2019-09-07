import { Web } from "@pnp/sp";
import ServiceBase from "./service-base";

export default class SPRestService extends ServiceBase {
  public async getUserInfo(listName: string): Promise<any> {
    if (process.env.NODE_ENV === "production") {
      const web = new Web("http://hq-spsrv01:90");
      const result: any = await web.lists.getByTitle(listName).items.get();
      return Promise.resolve(result);
    }
    return Promise.resolve("it is not a production mode");
  }

  public async getUserInfoDTO(): Promise<any> {
    const items: any = await this.get("users/current");

    console.log(items);
    return Promise.resolve(items);
  }
}
