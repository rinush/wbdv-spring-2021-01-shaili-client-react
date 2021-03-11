import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import moduleService from "../../services/module-service";

const LessonTabs = (
    {
        lessonsList=[],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson

    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined" &&
            courseId !== "undefined" && typeof courseId !== "undefined") {
            findLessonsForModule(moduleId)
        }

    }, [courseId, moduleId])

    return(
        <div>
            <h1 className={`text-white`}>Lessons</h1>
            <ul className="nav nav-tabs">
                {
                    lessonsList.map(lesson =>
                        <li>
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                item={lesson}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x ml-3 text-white"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        lessonsList: state.lessonReducer.lessons
    }
}
const dtpm = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lr => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: lr
                }))
        },
        updateLesson: (lesson) => {
                    lessonService.updateLesson(lesson._id, lesson)
                        .then(status => dispatch({
                            type: "UPDATE_LESSON",
                            lesson: lesson
                        }))
                },
                deleteLesson: (item) => {
                            lessonService.deleteLesson(item._id)
                                .then(status => dispatch({
                                    type: "DELETE_LESSON",
                                    lessonToDelete: item
                                }))
                        },
        createLesson: (moduleId) => {
            lessonService
                .createLesson(moduleId, {title: "New Lesson"})
                .then(lr => dispatch({
                    type: "CREATE_LESSON",
                    lesson: lr
                }))
        }
    }
}

export default connect(stpm, dtpm)(LessonTabs)