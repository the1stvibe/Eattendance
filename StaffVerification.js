import React, { Component } from'react';
import './StaffLogin.css';
import {BrowserRouter} from  'react-router-dom';
import {NavLink} from 'react-router-dom';

class StaffVerification extends Component{
    state={
        username:null,
        password:null
    }
 render(){
     return(
         <div className="stafflogin">
             
<div className="stafflogintitle">
    <div className="text">
        Verify Staff
    </div>

</div>
<form>
<p>Username <input type="text" size="50"/></p>
    <p>Staff Id <input className="bxtra" type="text" size="50"/></p>
    <button>VERIFY</button>
</form>
<div>   
</div>

         </div>
     );
 }
}
export default StaffVerification ;