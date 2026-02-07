import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  //   function handleCunter(){
  //     setCount(count+1)
  //   }
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <button onClick={()=>setCount(count-1)}>Reduce Counter</button>
    </div>
  );
};

export default Counter;
