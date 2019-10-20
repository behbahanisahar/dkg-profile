/* eslint-disable @typescript-eslint/camelcase */
import { Set_UserInfo } from "../constants/action-types";
const initialState = {
  UserInfo: {},
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case Set_UserInfo: {
      return {
        ...state,
        UserInfo: action.payload,
      };
    }
  }
  return state;
}
export default rootReducer;
