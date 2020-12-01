import './App.css';
import React from 'react';
import BankDB from './Bank';
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

class Delete extends React.Component{
    deleteuser=(uname)=>{
        BankDB.deleteuser(uname)
        this.setState({})
    }
    render(){
        let users=BankDB.getUser()
        return(
           <div className="container">
               <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">withdraw</Link>
      <Link to="/transhistory">Transaction history</Link>
               <h3>User Details</h3>
               <table className='table table-bordered table-sm'>
                   <tr><th>User name</th><th>Balance</th></tr>
                   
        { Object.keys(users).map(Key=><tr><td>{users[Key].uname}</td><td>{users[Key].balance}</td>
        <td onClick={()=>{this.deleteuser(Key)}}>Delete</td></tr>)}
                   
               </table> 
           </div>
        );
    }
}
export default Delete;