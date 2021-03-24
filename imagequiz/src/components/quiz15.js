import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Quiz15(props) {
    const history = useHistory();
    const quiz15 = [
        {
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Lily', isCorrect: false },
                { answerText: 'Daisy', isCorrect: false },
                { answerText: 'Dahlia', isCorrect: true },
                
            ],
        },
        {
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 month', isCorrect: false },
                { answerText: '4-6 days', isCorrect: true },
                { answerText: '2 weeks', isCorrect: false },
            ],
        },
        {
            questionText: "When do these bloom?",
            answerOptions: [
                { answerText: 'Spring', isCorrect: true },
                { answerText: 'Summer', isCorrect: false },
                { answerText: 'Fall', isCorrect: false },
            ],
        },
        {
            questionText: 'Where is this found?',
            answerOptions: [
                { answerText: 'Africa', isCorrect: false },
                { answerText: 'North America', isCorrect: true },
                { answerText: 'Asia', isCorrect: false },
            ],
        },
        {
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Love', isCorrect: false },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Elegance', isCorrect: true },
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
		if (nextQuestion < quiz15.length) {
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
					You scored {score} out of  {quiz15.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz15.length}
						</div>
						<div className='question-text'>{quiz15[currentQuestion].questionText}</div>
                        <img src="https://habahram.blob.core.windows.net/flowers/dahlia.jpg"/>
					</div>
					<div className='answer-section'>
						{quiz15[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Quiz15;