import React, { Component } from'react';
import './StaffLogin.css';
import {BrowserRouter} from  'react-router-dom';
import {NavLink} from 'react-router-dom';

class StudentLogin extends Component{
    state={
        username:null,
        password:null
    }
 render(){
     return(
         <div className="stafflogin">
             
<div className="stafflogintitle">
    <div className="text">
        Student Login Form
    </div>

</div>
<form>
<p>Username <input type="text" size="50"/></p>
    <p>Password <input className="xtra" type="text" size="50"/></p>
    <button>LOGIN</button>
</form>
<div>   
</div>

<p>If not registered please click here......<NavLink to="/studentregister">Register</NavLink></p>
         </div>
     );
 }
}
export default StudentLogin ;