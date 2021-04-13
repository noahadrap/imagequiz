let apiHost = "https://noahdrapimagequiz.herokuapp.com"

let getQuizzes = () => {
    return fetch(apiHost + '/quizzes')
    .then (response => response.json());
}
let api = {
    getQuizzes : getQuizzes
};

export default api;