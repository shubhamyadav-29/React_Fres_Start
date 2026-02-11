import { useState } from "react"

function Skills(){
    const [skills,setSkills]=useState([])
    const handleSkills=(event)=>{
      console.log(event.target.value, event.target.checked);
      if(event.target.checked){
        setSkills([...skills,event.target.value])
      }else{
        setSkills([skills.filter((item)=>item!=event.target.value)])
      }
      
    }
    return(
        <div>
           <h1>Select Your Skills</h1>
           <input type="checkbox"  id="php" value="php" onChange={handleSkills}/>
           <label htmlFor="php">PHP</label>
           <br /><br />
           <input type="checkbox"  id="js" value="js" onChange={handleSkills}/>
           <label htmlFor="js">JS</label>
           <br /><br />
           <input type="checkbox"  id="C++" value="C++" onChange={handleSkills}/>
           <label htmlFor="C++">C++</label>
           <br /><br />
           <input type="checkbox"  id="Java" value="Java" onChange={handleSkills}/>
           <label htmlFor="Java">Java</label>
           <br /><br />

           <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Skills