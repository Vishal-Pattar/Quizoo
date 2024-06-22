import { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import "./App.scss";
import Button from '@mui/material/Button';
import { Questions } from './QuestionTemplate';

function App() {
    const [showQuestion, setShowQuestion] = useState(false);
    const [quizCategory, setQuizCategory] = useState('');
    const [quizCategoryTitle, setQuizCategoryTitle] = useState('');

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
            {showQuestion ? (
                <Quiz questions={quizCategory} title={quizCategoryTitle} resetQuiz={resetQuiz} />
            ) :
                <>
                    <h1 className="main-title">Welcome to Quiz</h1>
                    <div className="start-box">
                        <div className='outer-box'>
                            {Object.keys(Questions).map(category => (
                                <div key={category} className="quiz-box">
                                    <span className="title">{toPascalCaseWithSpaces(category)}</span>
                                    <Button
                                        className="button"
                                        onClick={() => {
                                            setShowQuestion(true);
                                            setQuizCategory(Questions[category]);
                                            setQuizCategoryTitle(toPascalCaseWithSpaces(category));
                                        }}
                                        variant="contained"
                                    >
                                        Start
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default App;