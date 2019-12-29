import React, { Component } from'react';
import './StaffLogin.css';
import {BrowserRouter} from  'react-router-dom';
import {NavLink} from 'react-router-dom';

class RegisterCourse extends Component{
    state={
        username:null,
        password:null
    }
 render(){
     const registeredCourses=[];
     return(
         <div className="stafflogin">
             
<div className="stafflogintitle">
    <div className="text">
        Register Course
    </div>

</div>
<form>
<p>Select Level
<select>
    <option>100</option>
    <option>200</option>
    <option>300</option>
    <option>400</option>
    <option>500</option>
</select>
</p>
    <p>Course
    <select className="forcourseoption">
    <option>CSC 411</option>
    <option>CSC 412</option>
    <option>CSC 413</option>
    <option>CSC 414</option>
    <option>CSC 415</option>
</select>
    </p>
  

    <button onSubmit>Register</button>
</form>
<div>   
</div>

         </div>
     );
 }
}
export default RegisterCourse ;