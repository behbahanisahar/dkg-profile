import * as React from "react";

interface IProps {
  label: string;
  value: string;
  readonly: boolean;
}
export default class DkgTextField extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div className="kt-widget12__info">
        <span className="kt-widget12__desc">{this.props.label}</span>
        <span className="kt-widget12__value">{this.props.value}</span>
      </div>
      // <div>
      //   <label>{this.props.label}</label>
      //   <input type="text" value={this.props.value} readOnly={this.props.readonly} />
      // </div>
    );
  }
}
