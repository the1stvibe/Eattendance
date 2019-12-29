import React, { Component } from'react';
import './StaffLogin.css';
import {BrowserRouter} from  'react-router-dom';
import {NavLink} from 'react-router-dom';

class StaffLogin extends Component{
    state={
        username:null,
        password:null
    }
 render(){
     const defaultPreventer=(e)=>{
         e.preventDefault();
     }
     return(
         <div className="stafflogin">
             
<div className="stafflogintitle">
    <div className="text">
        Staff Login Form
    </div>

</div>
<form>
<p>Username <input type="text" size="50"/></p>
    <p>Password <input className="xtra" type="text" size="50"/></p>
    <button onSubmit={this.defaultPreventer}>LOGIN</button>
</form>
<div>   
</div>

<p>If not registered please click here......<NavLink to="/staffregister">Register</NavLink></p>
         </div>
     );
 }
}
export default StaffLogin ;