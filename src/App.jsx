import { useState } from "react"

function App(){
  const [val,setValue] =useState("")
  return(
    <div>
      <h1>Get Input field Value</h1>
      <input type="text" value={val} onChange={(event)=> setValue
      (event.target.value)} placeholder="Enter User Name" />
      
      <h1>{val}</h1>
      <button onClick={()=>setValue("")}>Clear value</button>
    </div>
  )
}

export default App