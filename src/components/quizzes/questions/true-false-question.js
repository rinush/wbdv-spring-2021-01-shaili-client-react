import React, {useEffect, useState} from "react";
import '../quiz-style.css'

const TrueFalseQuestion = ({question, currGrade}) => {

    const [ans, setAns] = useState(null)

    return (
        <div>
            <h4>
                <div className="row">
                    <div className="col-lg-11">
                        {question.question}
                    </div>
                    <div className="col-lg-1">
                        {
                            ans === question.correct &&
                            currGrade &&
                            <i className="fas fa-check float-right right"/>
                        }
                        {
                            ans !== question.correct &&
                            ans !== null &&
                            currGrade &&
                            <i className="fas fa-times float-right wrong"/>
                        }
                    </div>
                </div>
            </h4>

            <div>
                <div className="list-group row">
                    <div className={`list-group-item option
                            ${(currGrade ? (question.correct === "true" ? "rightAns"
                            : (ans === "true" ? "wrongAns" : "")): "")}`}>
                        <label>
                            <input type="radio" onClick={() => {setAns("true")}} name={question._id} />
                                True
                        </label>
                    </div>
                    <div className={`list-group-item option
                            ${(currGrade ? (question.correct === "false" ? "rightAns"
                            : (ans === "false" ? "wrongAns" : "")): "")}`}>
                        <label>
                            <input type="radio" onClick={() => {setAns("false")}} name={question._id}/>
                                False
                        </label>
                    </div>
                </div>
                <div className="row">
                    {ans !== null && <>Your answer: {ans}</>}
                </div>
            </div>
        </div>
    )
}

export default TrueFalseQuestion