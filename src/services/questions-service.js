const QUIZZES_URL = 'http://localhost:3000/api/quizzes';
export const findQuestionsForQuiz = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())

const queAPI = {
    findQuestionsForQuiz
}

export default queAPI