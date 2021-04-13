import Quiz1 from './components/quiz1';
import Quiz2 from './components/quiz2';
import Quiz3 from './components/quiz3';
import Quiz4 from './components/quiz4';
import Quiz5 from './components/quiz5';
import Quiz6 from './components/quiz6';
import Quiz7 from './components/quiz7';
import Quiz8 from './components/quiz8';
import Quiz9 from './components/quiz9';
import Quiz10 from './components/quiz10';
import Quiz11 from './components/quiz11';
import Quiz12 from './components/quiz12';
import Quiz13 from './components/quiz13';
import Quiz14 from './components/quiz14';
import Quiz15 from './components/quiz15';
import Quiz16 from './components/quiz16';
import Quiz17 from './components/quiz17';
import Quiz18 from './components/quiz18';
import Quiz19 from './components/quiz19';
import Quiz20 from './components/quiz20';
import Quiz21 from './components/quiz21';
import Quiz22 from './components/quiz22';
import Quiz23 from './components/quiz23';
import Quiz24 from './components/quiz24';
import Quiz25 from './components/quiz25';
import Quiz26 from './components/quiz26';
import Quiz27 from './components/quiz27';

let quizzes = [Quiz1, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7,
     Quiz8, Quiz9, Quiz10, Quiz11, Quiz12, Quiz13, Quiz14, Quiz15, 
     Quiz16, Quiz17, Quiz18, Quiz19, Quiz20, Quiz21, Quiz22, Quiz23, 
     Quiz24, Quiz25, Quiz26, Quiz27]

const express = require('express')

const app = express();
const port = process.env.PORT || 4002;

app.use(express.json());

app.get('/quizzes', (request, resonse) => {
    response.send(quizzes);
});

app.listen(port, () => console.log("listening on port " + port))