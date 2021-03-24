import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Quiz20(props) {
    const history = useHistory();
    const quiz20 = [
        {
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Lotus', isCorrect: true },
                { answerText: 'Lantana', isCorrect: false },
                { answerText: 'Dahlia', isCorrect: false },
                
            ],
        },
        {
            questionText: 'How long do these live for?',
            answerOptions: [
                { answerText: '1 month', isCorrect: false },
                { answerText: '4 months', isCorrect: false },
                { answerText: '1000+ years', isCorrect: true },
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
                { answerText: 'North America', isCorrect: false },
                { answerText: 'Asia', isCorrect: true },
            ],
        },
        {
            questionText: 'What does this flower symbolize?',
            answerOptions: [
                
                { answerText: 'Love', isCorrect: false },
                { answerText: 'Strength', isCorrect: false },
                { answerText: 'Purity', isCorrect: true },
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
		if (nextQuestion < quiz20.length) {
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
					You scored {score} out of  {quiz20.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz20.length}
						</div>
						<div className='question-text'>{quiz20[currentQuestion].questionText}</div>
                        <img src="https://habahram.blob.core.windows.net/flowers/lotus.jpg"/>
					</div>
					<div className='answer-section'>
						{quiz20[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Quiz20;