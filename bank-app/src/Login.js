import './App.css';
import React from 'react';
import BankDB from './Bank';
import Home from './Home';
import swal from 'sweetalert';
import {BrowserRouter,Link, withRouter} from 'react-router-dom'
class Login extends React.Component{
  state={
    username:"",
    password:""
  }
  onUserNameChange=(event)=>{this.setState({username: event.target.value})}
  onPasswordChange=(event)=>{this.setState({password:event.target.value})}
  onSubmit=(event)=>{
     event.preventDefault();
    let uname=this.state.username
    let pwd=this.state.password
      var data = BankDB.getAccountDetails()
      if (uname in data ) {
          let password = data[uname]["pswd"]
          {
              if (password === pwd) {
  
                BankDB.setCurrentUser(uname)
                //BankDB.currentUser=uname
                  swal("Login Success!", "You clicked the button!", "success");
                  this.props.history.push('/Home')
              
                 
  
              }
              else swal("Incorrect password!", "You clicked the button!", "warning");
          }
      }
      else swal("Invalid user!", "You clicked the button!", "error");
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
                    <div className="row">
                        <div className="col">
                  <div className="form-group">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                      <label className="form-check-label" for="dropdownCheck">
                        Remember me
                      </label>
                      </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" id="submit" className="btn btn-primary" >Sign in</button>
              
               
              </div>
            </div>
            </form></BrowserRouter>);
    }
}
export default withRouter(Login);