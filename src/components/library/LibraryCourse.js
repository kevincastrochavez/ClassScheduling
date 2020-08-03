import React, { Component } from "react";
import Icon from "../Icon";
import Arrow from "../Arrow";
import Action from "../Action";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">Problem Solving</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        <Arrow className="library-course__arrow" />
        <Action className="library-course__action" />
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Content about Lorem Ipsum goeas all the way here</p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
