let apiHost = "https://noahadrap-imagequiz.herokuapp.com"

let getQuizzes = () => {
    return fetch(apiHost + '/quizzes')
    .then (response => response.json());
}

let getQuiz = (id) => {
    return fetch(apiHost + '/quiz/' + id)
    .then (response => response.json());
}

let getFlowers = () => {
    return fetch(apiHost + '/flowers')
    .then (response => response.json());
}

let saveScore = (score, quizid, username) => {
    return fetch(apiHost + '/score', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({score : score, quizid : quizid, usernsme : username})
    
    });
}
let api = {
    getQuizzes : getQuizzes,
    getFlowers : getFlowers,
    getQuiz : getQuiz,
    saveScore : saveScore
};

export default api;