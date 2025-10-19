import {Route} from "react-router-dom";
import Home from "./components/Home";
import EachEmail from "./components/eachEmail";

function App(){

  return(
    <>
    
    <Route exact path="/" component={Home}/>
    <Route exact path="/email/:id" component={EachEmail}/>
    </>
  )
}

export default App;