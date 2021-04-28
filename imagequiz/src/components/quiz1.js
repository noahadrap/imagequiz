import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import api from '../communication/api'
function Quiz (props) {
    const history = useHistory();
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState([]);
    useEffect(() => {
        if (quiz.length == 0) {
        let id = props.location.state.quizid;
        console.log(id)
          api.getQuiz(id)
          .then(x => setQuiz(x))
          .catch(e => console.log(e));
        }
      })

      useEffect (() => {
          if (showScore) {
              api.saveScore(score, props.location.state.quizid, localStorage.getItem('username'))
              .then(() => console.log('this score was saved successfully'))
              .catch(e => console.log(e));
          }
      })

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    function refreshPage() {
        window.location.reload(false);
      }
    return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of  {quiz.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : quiz.length > 0 ? (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz.length}
						</div>
						<div className='question-text'>{quiz[currentQuestion].questionText}</div>
                        <img src={quiz[currentQuestion].image}/>
					</div>
					<div className='answer-section'>
						{quiz[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			) : ''}
		</div>
	);
}


export default Quiz;
