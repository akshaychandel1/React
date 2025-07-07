import { useState } from 'react'
import Counter from './Counter'
import Toogle from './Toogle'
import MultiCondition from './MultiCondition'
import './App.css'
import Props from './Props'

function App() {
//  const [fruit,setFruit] = useState('Apple');
//   function handleFruit() {
//   setFruit('Banana');
//   }

// function click() {
//   alert('Button clicked!');
// }
// function handleClick(id){
//  const name =  prompt('Please enter your name:');
//   alert(`Your Name is ${name} and your id is ${id}`);

// }

   const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  }
const user2 = {
    name: 'Alex',
    age: 29,
    email: 'alex@example.com'
  }
  // let name = 'John';
  // let age = 30;
  // let email = 'john@example.com';
   return (
    <>
    <Props user={user} />
    <Props user={user2} />
    {/* <MultiCondition /> */}
    {/* <Toogle /> */}
    {/* <Counter /> */}
    {/* <h1>{fruit}</h1>
  <button onClick={handleFruit}>Change Fruit Using State </button> */}
    </>
  )
}

export default App
