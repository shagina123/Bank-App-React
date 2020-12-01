import './App.css';
import React from 'react';
import Delete from './deleteUser'
import Withdraw from './withdraw';
import Deposit from './deposit'    
import TransHistory from './transhitory'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
class Home extends React.Component{
    
    render(){
        return(
           
            
         
    <div className="App">
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">withdraw</Link>
      <Link to="/transhistory">Transaction history</Link>
      <Link to="/deleteUser">User details</Link>
      <Switch>
        {/* <Route path="/deposit" exact={true}><Deposit/></Route>
        <Route path="/withdraw" exact={true}><Withdraw/></Route>
        <Route path="/transhistory" exact={true}><TransHistory/></Route> */}
      </Switch>
     
      {/* <Login/> */}
    </div>
   
           
        )
    }
}
export default Home;