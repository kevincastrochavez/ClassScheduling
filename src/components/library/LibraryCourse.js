import React, { Component } from "react";
import Icon from "../Icon";
import Arrow from "../Arrow";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-arrow">
          <label className="library-course__title">Problem Solving</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        <Arrow className="library-course__arrow" />
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
