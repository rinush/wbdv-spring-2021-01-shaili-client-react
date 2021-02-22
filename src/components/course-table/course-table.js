import React from 'react'
import CourseRow from "./course-row";
import AddCourseElement from "../add-course-element";
import CourseTopElement from "../course-top-element";
import Footer from "../footer.js"
import {Link} from "react-router-dom";
import '../course-style.css';

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <div>
      <div class="wbdv-sticky-top">
      <AddCourseElement
      addCourse = {this.props.addCourse}
      updateForm = {this.props.updateForm}
      coursetitle = {this.props.coursetitle} />
      <CourseTopElement />
        <Link to="/courses/grid">
                  <i className="fas fa-2x fa-th position-absolute thsymbol"></i>
        </Link>
      </div>
        <table className="table">
          <tbody>
          <div class="container courses mt-5">
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </div>
          </tbody>
        </table>
        <Footer addCourse = {this.props.addCourse} />
      </div>
    )
  }
}