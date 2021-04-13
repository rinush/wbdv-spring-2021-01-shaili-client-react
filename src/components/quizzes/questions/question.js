import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import '../quiz-style.css';

const Question = ({question}) => {

    const [currGrade, setGrade] = useState(false)

    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    currGrade={currGrade}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    currGrade={currGrade}
                />
            }
            <button
                onClick={() => setGrade(!currGrade)}
                className="grade">
                    Grade
            </button>
        </div>
    )
}

export default Question;