import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import Conditions from "./Components/Conditions";
import Form from "./Components/Form";
function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1 className="heading">Quiz App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/Conditions" element={<Conditions />} />
          <Route
            path="/Quiz"
            element={<Quiz score={score} setScore={setScore} />}
          />
          <Route path="/form" element={<Form />} />
          <Route
            path="/EndScreen"
            element={<EndScreen score={score} setScore={setScore} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
