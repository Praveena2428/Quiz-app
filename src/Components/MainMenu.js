import React from 'react'
import {useNavigate} from "react-router-dom"

const MainMenu = () => {
  const navigate = useNavigate();
    return (
    <div className='Menu'>     
      <button  onClick={()=>navigate("/form")}>Start Quiz</button>
    </div>
  )
}

export default MainMenu