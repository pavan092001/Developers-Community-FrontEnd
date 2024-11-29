import Home from "./pages/Home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";

import Settings from "./pages/settings/Settings";
import SinglePOST from "./components/singlepost/SinglePOST";
import React from "react";
import { useContext } from "react";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const { user } =useContext(Context);
  return (
    <Router>
      <TopBar/>
     <Switch>
          <Route exact path="/login">
          {user ?<Home/> :<Login/>}
          
          </Route>
          <Route exact path="/register">
            {user ?<Home/> :<Register/>}
          </Route>
          <Route exact path="/write">
              {user ?<Write/> :<Login/>}
          </Route>
          <Route exact path="/setting"> 
             {user ?<Settings/> :<Login/>}
          </Route>
          <Route exact path="/post/:postId">
            <Single/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>      
      </Router>

    
  );
}

export default App;
