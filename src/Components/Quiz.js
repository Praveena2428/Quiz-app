import React from "react";
import { useState, useEffect } from "react";
import { Questions } from "./Data/Questionbank";
import { useNavigate } from "react-router-dom";

const Quiz = (props) => {
  const { setScore } = props;
  const [currQuestion, setCurrQuestion] = useState(0);
  const [option, setOption] = useState("");
  const navigate = useNavigate();
  const [duration, setDuration] = useState(
    Number(localStorage.getItem("quizTimer")) || 50
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((prevDuration) => {
        const updatedDuration = prevDuration - 1;
        localStorage.setItem("quizTimer", updatedDuration.toString());
        return updatedDuration;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (duration <= 0) {
      navigate('/EndScreen')
    }
  }, [duration]);

  const formatTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleClick = () => {
    if (Questions[currQuestion].answer === option) {
      setScore((prev) => prev + 1);
    }
    setCurrQuestion((prev) => prev + 1);
  };

  const finalQuiz = () => {
    if (Questions[currQuestion].answer === option) {
      setScore((prev) => prev + 1);
    }
    localStorage.removeItem("quizTimer");
    navigate("/EndScreen");
  };

  const Previous = () => {
    setCurrQuestion((prev) => prev - 1);
  };

  return (
    <div className="Quiz">
      <div className="timer">
        <h2> {formatTime(duration)}</h2>
      </div>
      <h2 style={{ margin: "0 20px" }}>{Questions[currQuestion].question}</h2>
      <div className="options">
        <ul>
          <li>
            <lable>
              <input
                type="radio"
                name="options"
                value={Questions[currQuestion].optionA}
                onChange={() => setOption("A")}
              ></input>
              <span>{Questions[currQuestion].optionA}</span>
            </lable>
          </li>
          <li>
            <lable>
              <input
                type="radio"
                name="options"
                value={Questions[currQuestion].optionB}
                onChange={() => setOption("B")}
              ></input>
              <span>{Questions[currQuestion].optionB}</span>
            </lable>
          </li>
          <li>
            <lable>
              <input
                type="radio"
                name="options"
                value={Questions[currQuestion].optionC}
                onChange={() => setOption("C")}
              ></input>
              <span>{Questions[currQuestion].optionC}</span>
            </lable>
          </li>
          <li>
            <lable>
              <input
                type="radio"
                name="options"
                value={Questions[currQuestion].optionD}
                onChange={() => setOption("D")}
              ></input>
              <span>{Questions[currQuestion].optionD}</span>
            </lable>
          </li>
        </ul>
      </div>
      <div className="btn">
        {currQuestion > 0 && <button onClick={Previous}>Back</button>}
        {currQuestion === Questions.length - 1 ? (
          <button onClick={finalQuiz}>Finish Quiz</button>
        ) : (
          // <button onClick={finalQuiz}>Finish Quiz</button>
          <button style={{ color: "rgb(56, 48, 48)" }} onClick={handleClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
