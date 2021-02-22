import React from 'react'
import './course-editor-style.css'

const CourseEditorTopElement = ({history}) =>

<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
    <button class="navbar-toggler mr-2"
            type="button"
            data-toggle="collapse"
            data-target="#navSupportedContent">
        <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand text-white ml-2" href="#">
        <i class="fas fa-times close-editor" onClick={() => history.goBack()}></i>
        CS 5610 - Web Development
    </a>


    <div class="collapse navbar-collapse"
         id="navSupportedContent">

        <ul class="nav-bar nav elements-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Build</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Pages</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Theme</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Store</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">App</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-plus"></i>
                </a>
            </li>
        </ul>
    </div>
</nav>

export default CourseEditorTopElement