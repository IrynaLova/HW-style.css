import './App.css'
import type {JSX} from "react";
import Greeting from "./components/Greeting.tsx";


function App(): JSX.Element {
     const name1 = "Peter";

  return (
    <>
        {32 + 23}
        <Greeting firstName="John" age={24}/>
        <Greeting firstName={name1} age={88}/>
        <Greeting firstName={"Mari"} />
    </>
  )
}

export default App
