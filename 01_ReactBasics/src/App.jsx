import Header from "./Header";
import LoginComponent,{SignUP,UserKey} from "./UserComponent";
import './App.css';
function App() {
  return (
    <>
    <Header />
    <h1>hELLO</h1>
    <Fruit />
    <LoginComponent />
    <SignUP />
     <h1>{UserKey}</h1>
     <UserName />
    </>
  )
}

function UserName (){
  const userName = "Akshay Chandel";
  let userAge = 25;
  let x =30;
  let y = 20;
  return(
    <>
    <h1> My Name Is {userName}</h1>
    <h1>My Age Is{userAge}</h1>
    <h1>{x+y}</h1>
    </>
  )
}


function Fruit(){
  return  (
    <div>
      <h2>Fruits</h2>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
      </ul>
    </div>
  );
}
export default App; 