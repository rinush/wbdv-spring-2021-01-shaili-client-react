import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
import lessonService from "../../services/lesson-service"
import topicService from "../../services/topic-service"

const ModuleList = (
    {
        modulesList=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return(
        <div>
            <h1 className = {`text-white text-center`}>Modules</h1>
            <ul>
                {
                    modulesList.map(module =>
                        <li className={`list-group-item total_modules text-white ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item addModule text-center">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x text-white"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        modulesList: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
    findModulesForCourse: (courseId) => {
                moduleService.findModulesForCourse(courseId)
                    .then(mr => dispatch({
                        type: "FIND_MODULES_FOR_COURSE",
                        modules: mr
                    }))
                lessonService.findLessonsForModule(undefined)
                    .then(lr => dispatch({
                        type: "FIND_LESSONS_FOR_MODULE",
                        lessons: lr
                    }))
                topicService.findTopicsForLesson(undefined)
                    .then(tr => dispatch({
                        type: "FIND_TOPICS_FOR_LESSON",
                        topics: tr
                    }))
            },
        updateModule: (module) =>
                    moduleService.updateModule(module._id, module)
                        .then(status => dispatch({
                            type: "UPDATE_MODULE",
                            module: module
                        })),
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        createModule: (courseId) => {
                    moduleService.createModule(courseId, {title: "New Module"})
                        .then(mr => dispatch({
                            type: "CREATE_MODULE",
                            module: mr
                        }))
                }

    }
}

export default connect(stpm, dtpm)
(ModuleList)