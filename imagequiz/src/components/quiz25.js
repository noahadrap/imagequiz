import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Quiz25(props) {
    const history = useHistory();
    const quiz25 = [
        {
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Tickseed', isCorrect: true },
                { answerText: 'Lantana', isCorrect: false },
                { answerText: 'Dahlia', isCorrect: false },
                
            ],
        },
        {
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 month', isCorrect: false },
                { answerText: '1 year', isCorrect: false },
                { answerText: '3-4 years', isCorrect: true },
            ],
        },
        {
            questionText: "When do these bloom?",
            answerOptions: [
                { answerText: 'Spring', isCorrect: false },
                { answerText: 'Summer', isCorrect: true },
                { answerText: 'Fall', isCorrect: false },
            ],
        },
        {
            questionText: 'Where is this found?',
            answerOptions: [
                { answerText: 'Africa', isCorrect: false },
                { answerText: 'North America', isCorrect: true},
                { answerText: 'Europe', isCorrect: false },
            ],
        },
        {
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Cheerfulness', isCorrect: true },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Fertility', isCorrect: false },
            ],
        },
        {
            questionText: 'Are these poisonous?',
            answerOptions: [
                { answerText: 'Not to Humans', isCorrect: false },
                { answerText: 'Yes', isCorrect: false },
                { answerText: 'No', isCorrect: true },
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
		if (nextQuestion < quiz25.length) {
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
					You scored {score} out of  {quiz25.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz25.length}
						</div>
						<div className='question-text'>{quiz25[currentQuestion].questionText}</div>
                        <img src="https://habahram.blob.core.windows.net/flowers/tickseed.jpg"/>
					</div>
					<div className='answer-section'>
						{quiz25[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Quiz25;