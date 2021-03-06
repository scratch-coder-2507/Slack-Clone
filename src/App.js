import React from "react"
import Header from "./Header"
import './App.css';
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from "./Chat"
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  console.log(user)
  return (
    //BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Switch>
              <Route path="/room/:roomId">
                <Chat/>
              </Route>
              <Route path="/">
                <h1>HS7</h1>
              </Route>
            </Switch>
          </div>
          </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
