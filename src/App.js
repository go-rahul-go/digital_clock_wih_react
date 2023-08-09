import React, { useState } from "react";
import "./style.css";

const App=()=>{
  let time = new Date().toLocaleTimeString();
  const [currentTime,setCurrentTime] = useState(time)


  //to continue change time
  setInterval(()=>{

    time=new Date().toLocaleTimeString();
    setCurrentTime(time);
  },1000)

    return(
    <div className="container">
      <span>{currentTime}</span>
    </div>
  )
}

export default App;
