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
      <div>
        <label>{this.props.label}</label>
        <input type="text" value={this.props.value} readOnly={this.props.readonly} />
      </div>
    );
  }
}
