import "./App.css";
import React, { useState } from "react";
import { questions } from "./mocks/questions";

function App() {
  // 현재 선택된 질문을 저장할 상태
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  // 랜덤 질문을 선택하는 함수
  const handleRandomQuestion = () => {
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
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Frontend 면접 질문 생성기</h1>
        <button className="question-button" onClick={handleRandomQuestion}>
          질문 가져오기
        </button>
        <p className="question-title">{currentCategory}</p>
        <p className="question">{currentQuestion}</p>
      </div>
    </div>
  );
}

export default App;
