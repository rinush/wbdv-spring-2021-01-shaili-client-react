const QUIZZES_URL = 'https://wbdv-spring21-react-db-node-se.herokuapp.com/api/quizzes';
export const findQuestionsForQuiz = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())

const queAPI = {
    findQuestionsForQuiz
}

export default queAPI