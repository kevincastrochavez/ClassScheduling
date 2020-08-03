import React, { Component } from "react";
import Icon from "./Icon";

class Action extends Component {
  render() {
    return (
      <div className={`${this.props.className} action`}>
        {Icon("fa fas-plus-circle")}
        {/* fa fas-times-circle */}
      </div>
    );
  }
}

export default Action;
