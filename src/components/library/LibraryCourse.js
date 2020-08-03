import React, { Component } from "react";
import Icon from "../Icon";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        {Icon("fas fa-check", "library-course__icon")}
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
