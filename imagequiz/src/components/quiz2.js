import {Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Quiz2 (props) {
    const history = useHistory();
    const quiz2 = [
        
        {
            questionText: 'What Flower is this?',
            answerOptions: [
                { answerText: 'Lily', isCorrect: false },
                { answerText: 'Daisy', isCorrect: false },
                { answerText: 'Alyssum', isCorrect: true },
                
            ],
        },
        {
            questionText: 'How are the smell of these best described?',
            answerOptions: [
                { answerText: 'No smell', isCorrect: false },
                { answerText: 'Sweet', isCorrect: true },
                { answerText: 'Sour', isCorrect: false },
            ],
        },
        {
            questionText: 'How long do these spread?',
            answerOptions: [
                { answerText: '3 to 6 inches', isCorrect: true },
                { answerText: '6 to 9 inches', isCorrect: false },
                { answerText: '9 to 12 inches', isCorrect: false },
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
            questionText: 'What does this classify as?',
            answerOptions: [
                
                { answerText: 'Flower', isCorrect: false },
                { answerText: 'Tree', isCorrect: false },
                { answerText: 'Evergreen', isCorrect: true },
            ],
        },
        {
            questionText: 'How Many Seeds are in a cell?',
            answerOptions: [
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '1', isCorrect: true },
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
		if (nextQuestion < quiz2.length) {
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
					You scored {score} out of  {quiz2.length} 
                    
                    <div><a onClick={refreshPage}>Take Quiz Again</a></div>
                    <div><a onClick={() => {history.push('/')}}>Go to Home Page </a></div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz2.length}
						</div>
						<div className='question-text'>{quiz2[currentQuestion].questionText}</div>
                        <img src="https://habahram.blob.core.windows.net/flowers/alyssum.jpg"/>
					</div>
					<div className='answer-section'>
						{quiz2[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Quiz2;
