import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Quiz1 (props) {
    const history = useHistory();
    const quiz1 = [
        {
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Lily', isCorrect: false },
                { answerText: 'Daisy', isCorrect: false },
                { answerText: 'Acaia', isCorrect: true },
                
            ],
        },
        {
            questionText: 'How Long Do Acaia Trees live?',
            answerOptions: [
                { answerText: '10-20 years', isCorrect: false },
                { answerText: '20-30 years', isCorrect: true },
                { answerText: '30-40 years', isCorrect: false },
            ],
        },
        {
            questionText: 'What animals feed off this?',
            answerOptions: [
                { answerText: 'Both of these', isCorrect: true },
                { answerText: 'Elephants', isCorrect: false },
                { answerText: 'Giraffes', isCorrect: false },
            ],
        },
        {
            questionText: 'Where do these trees grow?',
            answerOptions: [
                { answerText: 'Austrailia', isCorrect: false },
                { answerText: 'South Africa', isCorrect: false },
                { answerText: 'both of these', isCorrect: true },
            ],
        },
        {
            questionText: 'What protection do these trees have for herbivores?',
            answerOptions: [
                
                { answerText: 'Termites', isCorrect: false },
                { answerText: 'Poisonous leaves', isCorrect: false },
                { answerText: 'Thorns', isCorrect: true },
            ],
        },
        {
            questionText: 'What color do these leaves have when blooming?',
            answerOptions: [
                { answerText: 'Red', isCorrect: false },
                { answerText: 'Green', isCorrect: false },
                { answerText: 'Yellow', isCorrect: true },
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
		if (nextQuestion < quiz1.length) {
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
					You scored {score} out of  {quiz1.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz1.length}
						</div>
						<div className='question-text'>{quiz1[currentQuestion].questionText}</div>
                        <img src="https://habahram.blob.core.windows.net/flowers/acacia.jpg"/>
					</div>
					<div className='answer-section'>
						{quiz1[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Quiz1;
