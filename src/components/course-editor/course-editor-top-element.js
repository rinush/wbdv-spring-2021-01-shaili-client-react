import React from 'react'
import './course-editor-style.css'
import {Link} from 'react-router-dom';

const CourseEditorTopElement = ({history, title, layout}) =>

<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
    <button class="navbar-toggler mr-2"
            type="button"
            data-toggle="collapse"
            data-target="#navSupportedContent">
        <span class="navbar-toggler-icon"></span>
    </button>

    <Link to={`/courses/${layout}/`}>
    <a class="navbar-brand text-white ml-2" href="#">
        <i class="fas fa-times close-editor"></i>
        {title}
    </a>
    </Link>


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