import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Quiz3 (props) {
    const history = useHistory();
    const quiz3 = [
        
        {
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Lily', isCorrect: false },
                { answerText: 'Daisy', isCorrect: false },
                { answerText: 'Amaryllis', isCorrect: true },
                
            ],
        },
        {
            questionText: 'What is this flower known to symbolize?',
            answerOptions: [
                { answerText: 'Love', isCorrect: false },
                { answerText: 'Strength', isCorrect: true },
                { answerText: 'Hate', isCorrect: false },
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
            questionText: 'Are these poisonous?',
            answerOptions: [
                { answerText: 'Only to Humans', isCorrect: false },
                { answerText: 'Yes', isCorrect: false },
                { answerText: 'No', isCorrect: true },
            ],
        },
        {
            questionText: 'How tall do these grow?',
            answerOptions: [
                
                { answerText: '0-12 inches', isCorrect: false },
                { answerText: '36-48 inches', isCorrect: false },
                { answerText: '18-36 inches', isCorrect: true },
            ],
        },
        {
            questionText: 'Where are these native to?',
            answerOptions: [
                { answerText: 'Austrailia', isCorrect: false },
                { answerText: 'Europe', isCorrect: false },
                { answerText: 'Africa', isCorrect: true },
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
		if (nextQuestion < quiz3.length) {
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
					You scored {score} out of  {quiz3.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz3.length}
						</div>
						<div className='question-text'>{quiz3[currentQuestion].questionText}</div>
                        <img src="https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"/>
					</div>
					<div className='answer-section'>
						{quiz3[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Quiz3;