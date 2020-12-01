import "./App.css"
import React from 'react'
import swal from 'sweetalert'
import BankDB from './Bank'
import {withRouter,BrowserRouter} from 'react-router-dom'
class Registration extends React.Component{
    state={
        username:"",
        password:"",
        cpswd:"",
        account:0
      }
      onUserNameChange=(event)=>{this.setState({username: event.target.value})}
      onPasswordChange=(event)=>{this.setState({password:event.target.value})}
      oncpswdChange=(event)=>{this.setState({cpswd:event.target.value})}
      onaccountChange=(event)=>{this.setState({account:event.target.value})}
      onSubmit=(event)=>{
         event.preventDefault();
        let uname=this.state.username
        let pwd=this.state.password
        let cpswd=this.state.cpswd
        let account=this.state.account
   
          var data = BankDB.getAccountDetails()
          if (uname in data) {
              
            swal("Registration failed", "User name exists!", "error");
                      
                      // setTimeout(() => window.location.href = "Home.js", 5000)
                  
                     
      
          }
          else if(pwd !==cpswd)
          swal("Registration failed","Password doesnot match","error")
          else 
          {
            BankDB.addUser(uname,pwd,account)
           
          swal("Sign up Success!", "You clicked the button!", "success");
        this.props.history.push('/Login')  
        }
      }
      
    render()

    {
return(
  <BrowserRouter>
    <form onSubmit={this.onSubmit}>
        <h1> My Bank</h1>
            <div className="container" id="loginContainer">
                  <div className="form-group">
                    <div className="row">
                        <div className="col-4">
                    <label for="uname">User Name</label>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control" id="uname" placeholder="User Name" value={this.state.username} onChange={this.onUserNameChange}>
                 </input>
                    </div>
                  </div> 
                  <br></br>
                  <div className="row">
                        <div className="col-4">
                    <label for="uname">Account Number:</label>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control" id="uname" placeholder="Account" value={this.state.account} onChange={this.onaccountChange}>
                 </input>
                    </div>
                  </div> 
                  <br></br>
                  <div className="form-group">
                    <div className="row">
                        <div className="col-4">
                    <label for="password">Password</label>
                    </div>
                    <div className="col-8">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}>
                        </input>
                  </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                        <div className="col-4">
                    <label for="cpswd">Confirm Password</label>
                    </div>
                    <div className="col-8">
                    <input type="password" className="form-control" id="cpswd" placeholder="Password" value={this.state.cpswd} onChange={this.oncpswdChange}>
                        </input>
                  </div>
                    </div>
                  </div>
                    <div className="row">
                        <div className="col">
                  {/* <div className="form-group">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                      <label className="form-check-label" for="dropdownCheck">
                        Remember me
                      </label>
                      </div>
                      </div> */}
                    </div>
                  </div>
                  <button type="submit" id="submit" className="btn btn-primary" >Sign Up</button>
              
               
              </div>
            </div>
            </form></BrowserRouter>)
    }
}
export default withRouter(Registration);