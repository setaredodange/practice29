import Button from "./components/Button/Button"
import {useState} from "react";
import './App.css';

function App() {
  const [val, func] = useState(0);

  const arr=["google search", "Im feeling luckey"]
  return (

<>


<button onClick={(e)=> {
  func(val+1);
}}
>
  Add new
  
</button>

<span>{val}</span>

<button onClick={(e)=> {
  func(val-1);
}}
>
  Low new
  
</button>
<hr/>


    <div className="App">

      {arr.map((el)=>(
          
          <Button className="bgred">{el}</Button>
        
      ))}

      </div>
      </>
  );
        
{/*       
  //  <Button className="bgRed" >
  //    <>
  //    <p>Add</p>
  //    <p>Save</p>
  //    </>
  //  </Button>
  //  <Button >
  //    <>
  //    <p>Login</p>
  //    <p>Reset</p>
  //    </>
  //  </Button> */}
   
   
   

}

export default App;
