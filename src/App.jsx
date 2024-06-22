import { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import { QuizType } from "./initialstate";
import "./App.scss";
import Button from '@mui/material/Button';
import { Questions } from './QuestionTemplate';

function App() {
    const [showQues, setShowQues] = useState(false);
    const [whichQuiz, setWhichQuiz] = useState(QuizType);

    const toPascalCaseWithSpaces = (str) => {
        return str
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (match) => match.toUpperCase())
            .trim();
    };

    const resetQuiz = () => {
        setShowQues(false);
    };

    return (
        <>
            {showQues ? (
                <Quiz questions={whichQuiz} resetQuiz={resetQuiz} />
            ) :
                <div className="start-box">
                    <h1>Welcome to Quiz</h1>
                    <div className='outer-box'>
                        {Object.keys(Questions).map(category => (
                            <div key={category} className="quiz-box">
                                <span className="title">{toPascalCaseWithSpaces(category)}</span>
                                <Button 
                                    className="button" 
                                    onClick={() => {
                                        setShowQues(true);
                                        setWhichQuiz(Questions[category]);
                                    }} 
                                    variant="contained"
                                >
                                    Start
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default App;