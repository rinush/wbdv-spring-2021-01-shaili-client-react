import React from 'react'
import CourseEditor from "./course-editor/course-editor";
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
  state = {
    courses: [],
    qwe: 123,
    sdf: 456,
    coursetitle: ''
  }

  updateCourse = (course) => {
    console.log(course)
    if (course.title == "") {
        course.title = "New Course"
    }
                  course.lastModified = (new Date()).getMonth() + '/'
                  + (new Date()).getDate() + '/' + (new Date()).getFullYear() + ''
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)
        })))
  }

  componentDidMount = () =>
    findAllCourses()
        .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
          title: this.state.coursetitle,
          owner: "New Owner",
          lastModified: (new Date()).getMonth() + '/'
          + (new Date()).getDate() + '/' + (new Date()).getFullYear() + ''
        }

        if (newCourse.title=="") {
            newCourse.title = "New Course"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                  ...prevState,
                  courses: [
                      ...prevState.courses,
                      course
                  ]
                })))

        this.state.coursetitle = ""
      }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {

          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }

  updateForm = event => {
        return  this.setState({
              coursetitle: event.target.value.trim()
      })
      }

  findCourseById = courseId =>
          this.courseService.findCourseById(courseId)

  render() {
    return(
      <div>
        <Route path="/courses/table">
          <CourseTable
              addCourse = {this.addCourse}
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              updateForm = {this.updateForm}
              courses={this.state.courses}
              coursetitle={this.state.coursetitle} />
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              addCourse = {this.addCourse}
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              updateForm = {this.updateForm}
              courses={this.state.courses}
              coursetitle={this.state.coursetitle} />
        </Route>
          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
      </div>
    )
  }
}

export default CourseManager