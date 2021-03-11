import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import "./course-editor-style.css";
import CourseEditorTopElement from "./course-editor-top-element";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {connect, Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import courseService from "../../services/course-service"
import lessonService from "../../services/lesson-service";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();
    const [newCourse, setCourse] = useState([])


    useEffect(() => {
        courseService.findCourseById(courseId).then(item => setCourse(item))
    }, [courseId])



    return (
        <Provider store={store}>
            <div class="editor-element">
                <CourseEditorTopElement history = {history}
                                        title = {newCourse.title} />
                <div className="editor-module-topic">
                    <div className="row">
                        <div className="col-sm-3">
                            <ModuleList/>
                        </div>
                        <div className="col-sm-9">
                            <LessonTabs/>
                            <TopicPills/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor