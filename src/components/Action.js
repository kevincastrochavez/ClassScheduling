import React, { Component } from "react";
import Icon from "./Icon";

class Action extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick()}
        className={`${this.props.className} action`}
      >
        {Icon("fa fas-plus-circle")}
        {/* fa fas-times-circle */}
      </button>
    );
  }
}

export default Action;
