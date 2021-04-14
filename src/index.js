import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import Links from './component/Link';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// ReactDOM.render(<App/>, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <Links/>
  </React.StrictMode>,
  document.getElementById('root')
);