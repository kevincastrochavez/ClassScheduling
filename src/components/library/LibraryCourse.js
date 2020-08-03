import React, { Component } from "react";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
