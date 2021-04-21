import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import questionsService from "../../services/questions-service";
import Question from "./questions/question";
import quizService from "../../services/quiz-service";

const Quiz = () => {
  const {courseId, quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [quizAttempts, setQuizAttempts] = useState([]);


  useEffect(() => {
    questionsService
      .findQuestionsForQuiz(quizId)
      .then((fetchedQuestions) => setQuestions(fetchedQuestions));
    quizService
      .findQuizAttemptsScore(quizId)
      .then((fetchedAttempts) => setQuizAttempts(fetchedAttempts));
  }, []);

  return (
    <div>
      <h2 className="quiz-header">Quiz {quizId}</h2>
                      <ul className="list-group">
                          {
                              questions.map(question =>
                                  <li className="list-group-item">
                                      <Question question={question}/>
                                  </li>
                              )
                          }
                      </ul>
      <button className="grade" onClick={() => {
        quizService.submitQuiz(quizId, questions).then(res => {
            quizService.findQuizAttemptsScore(quizId).then(fetchedAttempts => {
                setQuizAttempts(fetchedAttempts);
            })
        })
      }}>
        Submit Quiz
      </button>
      <h2>Quiz Results</h2>
      <div className="row">
        {quizAttempts.map((quizAttempt) => {
          return (
            <div className="col-lg-2">
              Result: {quizAttempt.score}
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default Quiz;
