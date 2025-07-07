import {useState} from 'react';

function Toogle (){
    const [isOn, setIsOn] = useState(false)
    function handleToogle() {
        setIsOn(!isOn);
}
    return(
        <>
        <button onClick={handleToogle}>Toogle Button</button>
        <h1>{isOn?"ON":"OFF"}</h1>
        </>
    )
}
export default Toogle;