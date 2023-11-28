import { useState } from "react";
import "./LadderGame.css";

function LadderGame({ setShowLadderGame }) {
  const [people, setPeople] = useState([]); // 입력받은 사람들의 목록
  const [newPerson, setNewPerson] = useState(""); // 새로운 사람 이름 입력 상태
  const [order, setOrder] = useState([]);

  const addPerson = () => {
    if (newPerson !== "") {
      setPeople([...people, newPerson]);
      setNewPerson("");
    }
  };

  const shufflePeople = () => {
    const shuffled = people
      .map((a) => ({ sort: Math.random(), value: a }))
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
        <input
          type="text"
          value={newPerson}
          onChange={(e) => setNewPerson(e.target.value)}
          placeholder="이름 입력"
          className="ladder-game-input"
        />
        <button className="add-person-button" onClick={addPerson}>
          추가하기
        </button>
        <div className="people-list">
          {people.map((p, index) => (
            <div key={index} className="person-item">
              {p}
            </div>
          ))}
        </div>
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
