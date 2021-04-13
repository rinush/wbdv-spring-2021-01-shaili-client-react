import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"
import './quiz-style.css';

const QuizList = () => {

    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((fetchedQuizzes) => {
                setQuizzes(fetchedQuizzes)
            })
    })

    return (
        <div>
            <h2>QuizList</h2>
            <div className={"list-group-item"}>
                {
                    quizzes.map((quiz) => {
                        return (
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link
                                        to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                        className="list-group-item">
                                            {quiz.title}
                                    </Link>
                                </div>
                                <div className="col-lg-6 pull-right">
                                    <button className="start">Start</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default QuizList