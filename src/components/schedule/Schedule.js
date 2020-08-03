import React, { Component } from "react";
import Gradient from "../gradient";
import ScheduleCourse from "./ScheduleCourse";
import ProgressTracker from "./ProgressTracker";

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h1 className="schedule__title">Course Schedule</h1>
        <ScheduleCourse title="Problem Solving" />
        <ScheduleCourse title="Problem Solving" />
        <ScheduleCourse title="Problem Solving" />
        <ProgressTracker />
        <Gradient />
      </div>
    );
  }
}

export default Schedule;
