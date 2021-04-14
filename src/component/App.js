import React from "react";
 import Main from "./Main";
 import Map from "./Map";
 import history from './history';
 
import {
   Router,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  console.log(history);
  return (
    <Router history={history}>
    <Switch>
        <Route   exact path="/"  component={Main}/>
        <Route  exact path="/location"  component={Map}/>
    </Switch>
     </Router>

    // <Router>
    //   <div>
    //   <Switch>
    //     <Route path="/" exact component={Main} />
    //     <Route path="/location" exact component={Map}/>
    //   </Switch>
    //   </div>
    // </Router>
    
  );
}

export default App;


