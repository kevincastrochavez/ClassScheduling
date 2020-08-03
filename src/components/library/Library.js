import React, { Component } from "react";
import LibraryCourse from "./LibraryCourse";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Library extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    return (
      <div className="library">
        <h1 className="library__title">Course Library</h1>
        <LibraryCourse />
        <LibraryCourse />
        <LibraryCourse />
      </div>
    );
  }
}

Library = connect(null, actions)(Library);

export default Library;
