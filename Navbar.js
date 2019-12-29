import React, { Component } from'react';
import './StaffLogin.css';
import {BrowserRouter} from  'react-router-dom';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{
   
 render(){
     return(
             <div>
                
                 <ul>
                     <li><NavLink to="/">STAFF</NavLink></li>
                     <li><NavLink to="/studentlogin">STUDENT</NavLink></li>
                     <li><NavLink to="/adminlogin">ADMIN</NavLink></li>
                     
                 </ul>
                 
                 </div>

        
     );
 }
}
export default Navbar ;