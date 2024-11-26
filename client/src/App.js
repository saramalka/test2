import Cities from './Components/Cities'
import './App.css';
import Mone from './Components/Mone';
import { useState } from 'react';
import Birthday from './Components/Birthday';

function App() {
  function displayStr(){
    setStr("button 1")
   
  }
  const [isVisible,setIsVisible]=useState(false)
  const ditales=()=>{
setIsVisible(!isVisible)

  }
  const [str,setStr]=useState("")
  const a=document.getElementsByClassName('age')
  return (
    <>
     <button onClick={displayStr}>{str}</button>
     <button onClick={()=>setStr("button 2")}>{str}</button>
     <button onClick={ditales}>display ditails</button>
     <Cities/>
     <Mone/>
     
     
     <Birthday age={5} name={"John Due"}/>
     {isVisible && <div>
      name:Sari
     </div>}
    </>
  );
}

export default App;
