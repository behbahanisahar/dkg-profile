import UserInfoDTO from "../entities/UserProfile";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export default interface IAppProps {
  setUserInfoProp: (myValue: UserInfoDTO) => any;
}
