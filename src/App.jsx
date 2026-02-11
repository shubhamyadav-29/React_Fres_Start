import { useState } from "react";

function App() {
  const [name,setName] =useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('')
  return <div>
    <h1>Controller Component</h1>
    <form action="" method="get">
      <input value={name} type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/>
      <br/> <br/>
      <input value={password} type="password" placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}/>
      <br/><br/>
      <input value={email} type="email" placeholder="Enter email" onChange={(event)=>setEmail(event.target.value)}/>
      <br/><br/>
      <button>submit</button>
      <button onClick={()=>{setEmail("");setName("");setPassword("");}}>clear</button>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </form>
  </div>;
}

export default App;
