import React from 'react'
import './course-editor-style.css'

const CourseEditorModule = () =>

        <div class="col-lg-3 all-module-elements text-center">
            <ul class="list-group module-element">
                <li class="list-group-item mr-3 mb-4">
                    Module 1 - jQuery
                    <i class="float-right fas fa-times"></i>
                </li>
                <li class="list-group-item active mr-3 mb-4">
                    Module 2 - React
                    <i class="float-right fas fa-times"></i>
                </li>
                <li class="list-group-item mr-3 mb-4">
                    Module 3 - Redux
                    <i class="float-right fas fa-times"></i>
                </li>
                <li class="list-group-item mr-3 mb-4">
                    Module 4 - Native
                    <i class="float-right fas fa-times"></i>
                </li>
                <li class="list-group-item mr-3 mb-4">
                    Module 5 - Angular
                    <i class="float-right fas fa-times"></i>
                </li>
                <li class="list-group-item mr-3 mb-4">
                    Module 6 - Node
                    <i class="float-right fas fa-times"></i>
                </li>
                <div class="row">
                    <div class="col-lg-10">
                        <input class="form-control add-module"
                               type="text" />
                    </div>
                    <div class="col-lg-2">
                        <i class="fa fa-plus text-white"></i>
                    </div>
                </div>
            </ul>
        </div>

export default CourseEditorModule