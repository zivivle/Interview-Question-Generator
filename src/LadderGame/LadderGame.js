import { useState } from "react";
import "./LadderGame.css";

function LadderGame({ setShowLadderGame }) {
  const PEOPLE = ["형준", "성경", "동기"];
  const [order, setOrder] = useState([]);

  const shufflePeople = () => {
    const shuffled = PEOPLE.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setOrder(shuffled);
  };

  const handleMoveToMain = () => {
    setShowLadderGame(false); // Set the state to show the ladder game
  };

  return (
    <div className="ladder-game-container">
      <div className="ladder-game-header">
        <h2>사다리 타기 게임</h2>
        <button className="ladder-game-button" onClick={shufflePeople}>
          순서 정하기
        </button>
        <ol className="ladder-game-list">
          {order.map((person, index) => (
            <li key={index}>
              <span className="person-number">{index + 1}</span> {person}
            </li>
          ))}
        </ol>
      </div>
      <button className="back-button" onClick={handleMoveToMain}>
        되돌아 가기
      </button>
    </div>
  );
}

export default LadderGame;
