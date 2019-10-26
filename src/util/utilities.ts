/* eslint-disable @typescript-eslint/no-var-requires */
export default class Utilities {
  public getQueryStringValue = (key: string) => {
    return decodeURIComponent(
      window.location.search.replace(
        new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"),
        "$1",
      ),
    );
  };

  public getShamsiDate = (val: string) => {
    if (val === "") {
      return "";
    }
    const date = new Date(val);
    // date.setHours(date.getHours() + 24);
    const str = date.toISOString();
    const moment = require("moment-jalaali");
    return moment(str.split("T")[0], "YYYY-M-D").format("jYYYY/jM/jD");
  };
}
