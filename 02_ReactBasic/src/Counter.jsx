import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    function handleInc() {
        setCount(count + 1);
    }
    function handleDec() {
        setCount(count - 1);
    }
    function handleReset(){
        setCount(0);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
 )
}
export default Counter;