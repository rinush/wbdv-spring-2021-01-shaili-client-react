import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import AddCourseElement from "../add-course-element";
import CourseTopElement from "../course-top-element";
import Footer from "../footer.js"
import '../course-style.css';

const CourseGrid = ({deleteCourse,
                     updateCourse,
                     courses,
                     addCourse,
                     updateForm,
                     coursetitle}) =>
  <div>
  <div class="wbdv-sticky-top">
        <AddCourseElement
        addCourse = {addCourse}
        updateForm = {updateForm}
        coursetitle = {coursetitle} />
        <CourseTopElement />
      <Link to="/courses/table">
        <i className="fas fa-list fa-2x float-right mr-4"></i>
      </Link>
  </div>
    <div class="row position-relative course-card">
    {
      courses.map((course, ndx) =>
        <CourseCard updateCourse={updateCourse}
                    deleteCourse={deleteCourse}
                    key={ndx}
                    course={course}
                    title={course.title}
                    owner={course.owner}
                    lastModified={course.lastModified} />
      )
    }
    </div>
  <Footer addCourse = {addCourse} />
  </div>

export default CourseGrid