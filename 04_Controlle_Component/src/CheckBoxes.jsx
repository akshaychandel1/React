import { useState } from "react"

function CheckBoxes(){
    const [skill, setSkill] = useState([]);

    function handleClick(event) {
        console.log(event.target.value, event.target.checked);
        
        if (event.target.checked == true)  {
            setSkill([...skill, event.target.value])
        } else{
            setSkill([...skill.filter((item)=>item != event.target.value)])
        }
    }
    return(
        <>
        <h3>Select Your Skills</h3>
        <input onChange={handleClick} type="checkbox" name="" id="php" value="PHP" />
        <label htmlFor="php">PHP</label><br />
        <input onClick={handleClick} type="checkbox" name="" id="react" value="REACT"/>
        <label htmlFor="react">REACT</label> <br />
        <input onClick={handleClick} type="checkbox" name="" id="nodejs" value="NODE.JS"/>
        <label htmlFor="nodejs">NODE.JS</label> <br />
        <input onClick={handleClick} type="checkbox" name="" id="js" value="JAVASCRIPT"/>
        <label htmlFor="js">JAVASCRIPT</label><br />
        
        <h3>Selected Skills Are :- {skill.join(" , ")}</h3>        
        </>
    )
}

export default CheckBoxes