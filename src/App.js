import "./App.css";
import React, { useEffect, useState } from "react";
import { questions } from "./mocks/questions";
import LadderGame from "./LadderGame/LadderGame";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showLadderGame, setShowLadderGame] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [usedQuestions, setUsedQuestions] = useState([]);

  const initializeQuestions = () => {
    const allQuestions = [];
    Object.keys(questions).forEach((category) => {
      questions[category].forEach((question) => {
        allQuestions.push({ question, category });
      });
    });
    return allQuestions;
  };

  useEffect(() => {
    setRemainingQuestions(initializeQuestions());
  }, []);

  const handleRandomQuestion = () => {
    if (remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      const selectedQuestion = remainingQuestions[randomIndex];

      setCurrentQuestion(selectedQuestion.question);
      setCurrentCategory(selectedQuestion.category);

      // 사용된 질문을 usedQuestions에 추가
      setUsedQuestions((prev) => [...prev, selectedQuestion]);

      // 남은 질문에서 선택된 질문 제거
      setRemainingQuestions((prev) =>
        prev.filter((_, index) => index !== randomIndex)
      );
    } else {
      // 모든 질문이 사용되었을 때
      if (usedQuestions.length > 0) {
        // 사용된 질문들을 다시 remainingQuestions로 이동
        setRemainingQuestions([...usedQuestions]);
        setUsedQuestions([]);
        setCurrentQuestion("모든 질문이 끝났습니다. 다시 시작합니다.");
        setCurrentCategory("");
      }
    }
  };

  const handleLadderGame = () => {
    setShowLadderGame(true);
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
            <p className="remaining-count">
              남은 질문: {remainingQuestions.length}개
            </p>
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
