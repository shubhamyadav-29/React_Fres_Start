import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default Clock;
