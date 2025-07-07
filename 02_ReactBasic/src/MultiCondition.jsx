import { useState } from 'react';

function MultiCondition(){
    const [count, setCount] = useState(0);

    return(
        <>
        <button onClick={() => setCount(count + 1)}>COUNT</button>
        <h1>{count}</h1>
        <h1>Multi Condition</h1>
        {
            count==0?<h2>condition 0</h2>
            :count==1?<h2>condition 1</h2>
            :count==2?<h2>condition 2</h2>
            :count==3?<h2>condition 3</h2>
            : <h2>other condition</h2>
        }
        </>
    )
}
export default MultiCondition;