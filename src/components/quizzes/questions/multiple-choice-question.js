import React, {useState} from "react";
import '../quiz-style.css';

const MultipleChoiceQuestion = ({question, currGrade}) => {

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
                    {
                        question.choices.map((choice) => {
                            return (
                                <label className={`list-group-item option
                                ${(currGrade ? (question.correct === choice ? "rightAns"
                                            : (choice === ans ? "wrongAns" : "")) : "")}`}>
                                    <input type="radio" name={question._id}
                                        onClick={() => {
                                            question.answer=choice
                                            setAns(choice)
                                            }} value={choice} />
                                    {choice}
                                </label>
                            )
                        })
                    }
                </div>
                <div>
                    {ans !== null && <>Your answer: {ans}</>}
                </div>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion