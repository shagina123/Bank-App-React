import './App.css';
import React from 'react';
import BankDB from './Bank';
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

class TransHistory extends React.Component{
    
    render(){
        let history=BankDB.getHistory()
        return(
           <div>
     
               <h3>Transaction History</h3>
               <Link to="/deposit">Deposit</Link>
               <Link to="/withdraw">withdraw</Link>
               <Link to="/transhistory">Transaction history</Link>
               
               <table className='table table-bordered table-sm'>

                   <tr><th>TRansaction type</th><th>Amount</th></tr>
                   
        {history.map(h=><tr><td>{h.typeOfTranscaction}</td><td>{h.amount}</td></tr>)}
                   
               </table>
           </div>
        );
    }
}
export default TransHistory;