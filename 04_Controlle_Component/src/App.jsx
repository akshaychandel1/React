import { useState } from 'react';
import './App.css';
import CheckBoxes from './CheckBoxes';
import RadioBox from './RadioBox';

function App() {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  
  return (
    <>
    {/* <CheckBoxes /> */}
    <RadioBox />









    {/* <h1>Controlled Component</h1>
    <input type="text" placeholder='Enter Your Name' value={name} onChange={(event)=>{setName(event.target.value)}}/>
    <br />
    <input type="password" placeholder='Enter Your Password' value={password} onChange={(event)=>{setPassword(event.target.value)}} />
    <br />
    <input type="email" placeholder='Enter Your Email' value={email} onChange={(event)=>{setEmail(event.target.value)}} />
    <br />

    <button>Submit</button>
    <button onClick={()=>{setEmail(''),setPassword(''),setName('')}}>Clear</button>

    <h2>{name}</h2>
    <h2>{password}</h2>
    <h2>{email}</h2> */}
    </> 
  )
}

export default App
