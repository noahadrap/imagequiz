import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Quiz5 (props) {
    const history = useHistory();
    const quiz5 = [
        {
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Lily', isCorrect: false },
                { answerText: 'Daisy', isCorrect: false },
                { answerText: 'Azalea', isCorrect: true },
                
            ],
        },
        {
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 year', isCorrect: false },
                { answerText: '50 years', isCorrect: true },
                { answerText: '20 years', isCorrect: false },
            ],
        },
        {
            questionText: "How long is this flower's lifespan?",
            answerOptions: [
                { answerText: '6 weeks', isCorrect: true },
                { answerText: '2 weeks', isCorrect: false },
                { answerText: '5 months', isCorrect: false },
            ],
        },
        {
            questionText: 'Where is this found?',
            answerOptions: [
                { answerText: 'Africa', isCorrect: false },
                { answerText: 'Asia', isCorrect: false },
                { answerText: 'All over the world', isCorrect: true },
            ],
        },
        {
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Hate', isCorrect: false },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Love', isCorrect: true },
            ],
        },
        {
            questionText: 'Are these poisonous?',
            answerOptions: [
                { answerText: 'Not to Humans', isCorrect: false },
                { answerText: 'No', isCorrect: false },
                { answerText: 'Yes', isCorrect: true },
            ],
        },

    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz5.length) {
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
					You scored {score} out of  {quiz5.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz5.length}
						</div>
						<div className='question-text'>{quiz5[currentQuestion].questionText}</div>
                        <img src="https://habahram.blob.core.windows.net/flowers/azalea.jpg"/>
					</div>
					<div className='answer-section'>
						{quiz5[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Quiz5;