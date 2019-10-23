import * as React from "react";

interface IProps {
  Persianlabel?: string;
  EnLabel?: string;
  value: any;
  readonly: boolean;
}
export default class DkgTextField extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div className="kt-widget12__info">
        <span className="kt-widget12__desc">{this.props.Persianlabel}</span>
        <span className="kt-widget12__value">{this.props.value}</span>
      </div>
      // <div>
      //   <label>{this.props.label}</label>
      //   <input type="text" value={this.props.value} readOnly={this.props.readonly} />
      // </div>
    );
  }
}
