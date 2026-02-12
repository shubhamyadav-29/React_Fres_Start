import { useState } from "react";
function App(){
  const [gender,setGender] =  useState('male');
  return(
    <div>
      <h1>Handle Radio and DropDown</h1>
      <h4>Select Gender</h4>
      <input type="radio"  onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender=='male'} id="male"  />
      <label htmlFor="male">Male</label>
      <input type="radio"  onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=='female'} id="female" />
       <label htmlFor="female">Female</label>
       <h2>Select Your Gender:{gender}</h2>
    </div>
  )
}
export default App