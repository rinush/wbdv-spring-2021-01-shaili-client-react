const QUIZZES_URL = "http://localhost:3000/api/quizzes";

const findAttemptsForQuiz = (quizId) =>
  fetch(`${QUIZZES_URL}/${quizId}/attempts`).then((response) =>
    response.json()
  );

const submitAttempt = (quizId, questions) =>
  fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
    method: "POST",
    body: JSON.stringify(questions),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())


const api = {
  findAttemptsForQuiz: findAttemptsForQuiz,
  submitAttempt: submitAttempt,
};

export default api;