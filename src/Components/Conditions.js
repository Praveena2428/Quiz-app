import { useNavigate } from "react-router-dom";
const Condition = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    console.log("hello")
    navigate("/Quiz")
  }

  return (
    <div className="Conditions">
      <h2>Instructions</h2>
      <ol>
        <li>
          Please read and understand the test instructions so thet you will be
          able to easily navigate through the test.
        </li>
        <li>
          {" "}
          To move the next/previous question click the "Next" /"Previous" button
        </li>
        <li>1 points is awarded for the correct answer.</li>
        <li>Each questions has 4 options.you can choose only one option.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
        <li>There is no negative marks.</li>
      </ol>
      <div className="ins">

      <button onClick={handleClick}>I am ready to begin</button>
      </div>
    </div>
  );
};

export default Condition;
