/* eslint-disable @typescript-eslint/camelcase */
import { Set_UserInfo } from "../constants/action-types";
export function setUserInfo(payload) {
  return { type: Set_UserInfo, payload };
}
