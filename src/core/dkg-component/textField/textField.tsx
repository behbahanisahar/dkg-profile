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
      <div>
        <label>{this.props.Persianlabel}</label>
        <input type="text" value={this.props.value} readOnly={this.props.readonly} />
      </div>
    );
  }
}
