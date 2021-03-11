import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import moduleService from "../../services/module-service";
import topicService from "../../services/topic-service"

const TopicPills = (
    {
        topicsList=[],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic

    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [moduleId])

    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
        <div>
            <h1 className={`text-white`}>Topics</h1>
            <ul className="nav nav-pills">
                {
                    topicsList.map(topic =>
                        <li className={`topicList`}>
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                item={topic}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopic(lessonId)} className="topic-plus fas fa-plus fa-2x text-white ml-2"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        topicsList: state.topicReducer.topics
    }
}
const dtpm = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(tr => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics:tr
                }))
        },
        updateTopic: (topic) => {
                    topicService.updateTopic(topic._id, topic)
                        .then(status => dispatch({
                            type: "UPDATE_TOPIC",
                            topic: topic
                        }))
                },
        deleteTopic: (item) => {
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: item
                }))
        },
        createTopic: (lessonId) => {
                    topicService.createTopic(lessonId, {title: "New Topic"})
                        .then(tr => dispatch({
                            type: "CREATE_TOPIC",
                            topic: tr
                        }))
                }
    }
}

export default connect(stpm, dtpm)(TopicPills)