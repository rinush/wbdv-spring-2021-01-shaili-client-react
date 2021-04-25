 const QUIZZES_URL = "https://wbdv-spring21-react-db-node-se.herokuapp.com/api/quizzes";

const findAllQuizzes = () =>
  fetch(QUIZZES_URL).then((response) => response.json());

const findQuizById = (quizID) =>
  fetch(`${QUIZZES_URL}/${quizID}`).then((response) => response.json());

const findQuizAttemptsScore = (quizId) =>
  fetch(`${QUIZZES_URL}/${quizId}/attempts`).then((response) =>
    response.json()
  );

const submitQuiz = (quizId, questions) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(questions)
    }).then(response => response.json())


const quizAPI = {
  findAllQuizzes,
  findQuizById,
  findQuizAttemptsScore,
  submitQuiz
};

export default quizAPI;
