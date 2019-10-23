import * as React from "react";
import "./textField.less";

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
      <div className="text-container">
        <span className="label">{this.props.Persianlabel}</span>
        <span className="value">{this.props.value}</span>
      </div>
      // <div>
      //   <label>{this.props.label}</label>
      //   <input type="text" value={this.props.value} readOnly={this.props.readonly} />
      // </div>
    );
  }
}
