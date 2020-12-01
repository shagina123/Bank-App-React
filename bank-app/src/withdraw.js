import './App.css';
import React from 'react';
import BankDB from './Bank';
import Home from './Home';
import swal from 'sweetalert';
import {BrowserRouter,Link} from 'react-router-dom'
class Withdraw extends React.Component{
    state={
        uname:"",
        amount:0,
        balance:0
    }
    onUnameChange=(event)=>{this.setState({uname:event.target.value})}
    onAmountChange=(event)=>{this.setState({amount:event.target.value})}
        onSubmit=(event)=> {
   event.preventDefault();
        let amount = this.state.amount
        let data = BankDB.getAccountDetails()
        let user=this.state.uname
        if(user in data)
        {
            if(data[user]["balance"]>=amount)
        {
            data[user]["balance"] -= amount
            let balance=data[user]["balance"]
            this.setState({balance:balance})
           data[user]['history'].push({typeOfTranscaction:"Debit",amount:amount})
           BankDB.saveData()
        }
        else swal("Insufficient balance!", "You clicked the button!", "warning");
    
    }
    else swal("Invalid User!", "You clicked the button!", "warning");
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
            <div className="container">
            <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">withdraw</Link>
      <Link to="/transhistory">Transaction history</Link>
            {this.state.balance}
            <div className="row">
                <div className="col-6">
                   
                   <h3>Withdraw</h3> 
                   <input type="text" className="form-control" id="uname" placeholder="User Name" value={this.setState.uname} onChange={this.onUnameChange}></input><br></br>
                   {/* <!<input type="text" className="form-control" id="accountNo" placeholder="Account Number"><br> --> */}
                   <input type="text" className="form-control" id="amount" placeholder="Amount" value={this.setState.amount} onChange={this.onAmountChange}></input><br></br>
                   
                   <button type="submit" id="withdraw" onclick="withdrawAccount()" className="btn btn-danger">Withdraw</button>
                   <h4 id="depres"></h4>
            
</div>
                </div>
            </div>
            </form>
        )
    }
}
export default Withdraw;