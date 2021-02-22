import React from 'react'
import {Link} from "react-router-dom";
import CourseEditorTopElement from './course-editor-top-element'
import CourseEditorModule from './course-editor-module'
import CourseEditorTopic from './course-editor-topic'
import './course-editor-style.css'

const CourseEditor = ({history,
                       title}) =>
  <div>
    <CourseEditorTopElement history = {history}
                            title = {title} />

    <div class="container-fluid module-topic">
        <div class="row">
        <CourseEditorModule />
        <CourseEditorTopic />
        </div>
    </div>
  </div>

export default CourseEditor