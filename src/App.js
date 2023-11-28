import "./App.css";
import React, { useState } from "react";
import { questions } from "./mocks/questions";
import LadderGame from "./LadderGame/LadderGame";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showLadderGame, setShowLadderGame] = useState(false);

  const handleRandomQuestion = async () => {
    const categories = Object.keys(questions);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomQuestion =
      questions[randomCategory][
        Math.floor(Math.random() * questions[randomCategory].length)
      ];
    setCurrentQuestion(randomQuestion);
    setCurrentCategory(randomCategory);
  };

  const handleLadderGame = () => {
    setShowLadderGame(true); // Set the state to show the ladder game
  };

  return (
    <>
      {!showLadderGame ? (
        <div className="App">
          <div className="sub-button-container">
            <button onClick={handleLadderGame} className="sub-button">
              발표자 순서 사다리 타기
            </button>
          </div>
          <div className="container">
            <h1 className="title">Frontend 면접 질문 생성기</h1>
            <button className="question-button" onClick={handleRandomQuestion}>
              질문 가져오기
            </button>
            <p className="question-title">{currentCategory}</p>
            <p className="question">{currentQuestion}</p>
          </div>
        </div>
      ) : (
        <div className="ladder-game-wrapper">
          <LadderGame setShowLadderGame={setShowLadderGame} />
        </div>
      )}
    </>
  );
}

export default App;
