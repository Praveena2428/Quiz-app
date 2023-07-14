import React, { useState } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessage,setErrorMessage]=useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number) {
      setErrorMessage("Please fill in all field");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     setErrorMessage("It is not a valid email id");
     return;
    }
   setErrorMessage(" ")
    navigate("/Conditions");
  };

  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Eg:Jone"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
        ></input>

        <label htmlFor="mail">Email Id</label>
        <input
          placeholder="email@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="mail"
          required
        ></input>

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          placeholder="0123-456-789"
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          name="phoneNumber"
          required
        ></input>
        {errorMessage && <p style={{fontWeight:"bold",fontSize:"20px",color:"black"}}>*{errorMessage}</p>}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
