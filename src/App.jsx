import { useState } from "react";
import Skills from "./Skills";

function App() {
  const [name,setName] =useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('')
  return <div>
    <h1>Handle CheckBoxes in React</h1>
    <Skills/>
   
  </div>;
}

export default App;
