import { useState } from "react"

function RadioBox(){
    
    const[gender,setGender] = useState('Female')
    const[city,setCity] = useState('')
    return(
        <>
        <h1>Radio Button</h1>
        <h2>Select Your Gender</h2>
        <input type="radio"  onChange={(event)=>setGender(event.target.value)}  value={"male"} name="gender" id="male" checked= {gender == "male"}/>
        <label htmlFor="male">Male</label>
        <input type="radio" onChange={(event)=>setGender(event.target.value)} value={"female"} name="gender" id="female" checked={gender=="female"}/>
        <label htmlFor="female">Female</label>
        <h3>Selected Gender is {gender}</h3>

        <br /><br /><br />
        <hr />

        <h1>Select City</h1>
        <select onChange={(event)=>setCity(event.target.value)}>
            <option value="DELHI">DELHI</option>
            <option value="RIO">RIO</option>
            <option value="TOKYO">TOKYO</option>
            <option value="BERLIN">BERLIN</option>
        </select>
        <h3>Your City is : {city}</h3>

        </>
    )
}
export default RadioBox