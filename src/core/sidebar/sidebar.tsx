import * as React from "react";
import { connect } from "react-redux";
import UserInfoDTO from "../../entities/UserProfile";

interface IProps {
  name: string;
  UserInfo: UserInfoDTO;
}
class SidebarComponent extends React.Component<IProps> {
  public render() {
    return (
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head  kt-portlet__head--noborder">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title"></h3>
          </div>
          <div className="kt-portlet__head-toolbar"></div>
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit-y">
          <div className="kt-widget kt-widget--user-profile-1">
            <div className="kt-widget__head">
              <div className="kt-widget__media">
                {this.props.UserInfo.AvatarUrl === null && (
                  <div className="kt-media kt-media--success kt-media--lg">
                    <span>{this.props.UserInfo.AvatarTextPlaceholder}</span>
                  </div>
                )}
                {this.props.UserInfo.AvatarUrl !== null && (
                  <img alt={this.props.UserInfo.Title} src={this.props.UserInfo.AvatarUrl} />
                )}
                {/* <img src={this.props.UserInfo.AvatarUrl} alt="image" /> */}
              </div>
              <div className="kt-widget__content">
                <div className="kt-widget__section">
                  <a href="#" className="kt-widget__username">
                    {this.props.UserInfo.FirstName} {this.props.UserInfo.LastName}
                    <i className="flaticon2-correct kt-font-success"></i>
                  </a>
                  <span className="kt-widget__subtitle"> {this.props.UserInfo.SPLatinFullName}</span>
                </div>

                {/* <div className="kt-widget__action">
                  <button type="button" className="btn btn-info btn-sm">
                    تست
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-success btn-sm">
                    تست
                  </button>
                </div> */}
              </div>
            </div>
            <div className="kt-widget__body">
              <div className="kt-widget__content">
                <div className="kt-widget__info">
                  <span className="kt-widget__label">پست الکترونیک:</span>
                  <a href="#" className="kt-widget__data">
                    {this.props.UserInfo.EmailAddress}
                  </a>
                </div>
                <div className="kt-widget__info">
                  <span className="kt-widget__label">تلفن:</span>
                  <a href="#" className="kt-widget__data">
                    44(76)34254578
                  </a>
                </div>
                <div className="kt-widget__info">
                  <span className="kt-widget__label">واحد سازمانی:</span>
                  <span className="kt-widget__data"> {this.props.UserInfo.Department}</span>
                </div>
              </div>
              <div className="kt-widget__items">
                <a
                  href="/metronic/preview/demo9/custom/apps/user/profile-1/overview.html"
                  className="kt-widget__item kt-widget__item--active"
                >
                  <span className="kt-widget__section"></span>
                  <span className="kt-widget__desc">ارزیابی ۳۶۰ درجه</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  UserInfo: state.UserInfo,
});
const Sidebar = connect(
  mapStateToProps,
  null,
)(SidebarComponent);
export default Sidebar;
