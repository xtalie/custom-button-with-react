
import Buttons from './Buttons.js'

import './index.css';
import {useState} from "react"

function App() {
  const [activeBtn, setActiveBtn] = useState("all")
 

 return(
  <div>
  
    <div className="buttons">
    <Buttons title={"All"} active={activeBtn === "all"} onClick={()=> setActiveBtn("all") }/>
    <Buttons title={"Done"} active={activeBtn === "done"} onClick={()=> setActiveBtn("done") }/>
    <Buttons title={"inprogress"} active={activeBtn === "inprogress"} onClick={()=> setActiveBtn("inprogress") }/>
    <Buttons title={"todo"} active={activeBtn === "todo"} onClick={()=> setActiveBtn("todo") }/>
    </div>
   

  
  </div>
 )

}

export default App;
