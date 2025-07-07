import { useState } from 'react'
import User  from './User'
import Wrapper from './Wrapper'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [val , setVal] = useState("")

  return (
    <>

    <h1>Input Event Values</h1>
    <input type="text" placeholder='Enter Input Value' value={val} onChange={event=>{setVal(event.target.value)}} />
    <h1>{val}</h1>
    <button onClick={()=>{setVal("")}}>Clear Every Value</button>





{/*     
      <Wrapper color='blue'>
        <h1>Hello Wrapper Component</h1>
        <h2 style={{color:'red'}}>Please LogIn</h2>
      </Wrapper>
      <Wrapper color='orange'>
        <h1>Hello I am Orange</h1>
        <h2 style={{color:'red'}}>Please LogIn</h2>
      </Wrapper> */}
      {/* <User name='Akshay Chandel' name1='Shikhu '/> */}
    </>
  )
}

export default App;
