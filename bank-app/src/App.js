import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Registration from './register'
import Withdraw from './withdraw';
import Deposit from './deposit'    
import TransHistory from './transhitory'
import Delete from './deleteUser'
class App extends React.Component{
  render(){
  return (
    <BrowserRouter>

    <div className="App">
      <Link to="/register">Sign Up</Link>
      <Link to="/Login">LOgin</Link>
 {/* <Link to="/Home">Home</Link> */}
      <Switch>
        <Route path="/register" exact={true}><Registration/></Route>
        <Route path="/Login" exact={true}><Login/></Route>
        <Route path="/Home" exact={true}><Home/></Route>
        <Route path="/deposit" exact={true}><Deposit/></Route>
        <Route path="/withdraw" exact={true}><Withdraw/></Route>
        <Route path="/deleteUser" exact={true}><Delete/></Route>
        <Route path="/transhistory" exact={true}><TransHistory/></Route>
      </Switch>
      {/* <Login/> */}
    </div>
    </BrowserRouter>
  );
}
}
export default App;
