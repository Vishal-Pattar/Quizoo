import { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from "./Questions";
import { gkQuiz } from "./GeneralKnowledge";
import { QuizType } from "./initialstate";
import "./App.scss";

function App() {
  const [showQues, setShowQues] = useState(false);
  const [whichQuiz, setWhichQuiz] = useState(QuizType);

  const onQuizSelection = (ans) => {
    setShowQues(true);
    if (ans === "ML") {
      setWhichQuiz(jsQuizz.questions);
    }
    else if(ans === "GK"){
      setWhichQuiz(gkQuiz.questions);
    }
  }
  return (
    <>
      {showQues ? (
        <Quiz questions={whichQuiz} />
      )
        : <div className="start-box">
          <h1>Welcome to Quiz</h1>
          <ul>
            <button onClick={() => onQuizSelection("ML")}>Machine Learning</button><br/>
            <button onClick={() => onQuizSelection("GK")}>General Knowledge</button>
          </ul>
        </div>}
    </>
  );
}

export default App
