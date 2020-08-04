import React, { Component } from "react";
import Icon from "./Icon";

class Action extends Component {
  handleAction = function () {
    this.props.onClick();
    // document.getElementById('action').classList.add()
  }.bind(this);

  render() {
    return (
      <a
        id="action"
        onClick={() => this.handleAction}
        className={`${this.props.className} action`}
      >
        +
      </a>
    );
  }
}

export default Action;
