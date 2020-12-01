import Home from './Home';
import swal from 'sweetalert2'
import axios from 'axios'
var data = {
    shag: { uname: "shag", pswd: "a123", account:11, balance: 5000 ,history:[]},
    sredha: { uname: "sredha", pswd: "s123",account:12,  balance: 50000 ,history:[]}
}
let newData=localStorage.getItem("data")
if(newData)
{
    data=JSON.parse(newData)
}

class BankDB {
    static currentUser=""
    static getAccountDetails() {
        
        return data
    }

static addUser(uname,pswd,account){
    
    data[uname]={uname,pswd,account,balance:0,history:[]}
    BankDB.saveData()
   
}

static authnticn() {
    let pwd = document.querySelector("#password").value
    var user = document.querySelector("#uname").value
    var data = BankDB.getAccountDetails()
    if (user in data) {
        let password = data[user]["pswd"]
        {
            if (password === pwd) {

                swal("Login Success!", "You clicked the button!", "success");
                // setTimeout(() => window.location.href = "Home.js", 5000)
               //<Home/>

            }
            else swal("Incorrect password!", "You clicked the button!", "warning");
        }
    }
    else swal("Invalid user!", "You clicked the button!", "error");
}
static getUser()
{return data;
}
static getCurrentUser()
{
    return localStorage.getItem("currentUser")
}
static getHistory(){
    return data[BankDB.getCurrentUser()].history
  //  return BankDB.currentUser.history
}
static setCurrentUser(uname)
{
    localStorage.setItem("currentUser",uname)
  //  BankDB.currentUser=uname;
}
static saveData(){
    localStorage.setItem("data",JSON.stringify(data))
}
static deleteuser(uname)
{
   delete data[uname]
   BankDB.saveData()
}
}
export default BankDB