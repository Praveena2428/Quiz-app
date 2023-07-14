import React from "react";
import { Questions } from "./Data/Questionbank";
import {useNavigate} from "react-router-dom"

const EndScreen = (props) => {
  const { score, setScore } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    setScore(0);
    navigate("/")
  };

  return (
    <div className="Last">
      <h1>Congratulations!</h1>
      <p>You have completed the quiz</p>
      <h2>
        {score} /{Questions.length}
      </h2>
      <button onClick={handleClick}>Restart</button>
    </div>
  );
};

export default EndScreen;
