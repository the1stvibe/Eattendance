import React, { Component } from 'react';
import StaffLogin from './Components/StaffLogin';
import StaffRegister from './Components/StaffRegister';
import StudentLogin from './Components/StudentLogin';
import StudentRegister from './Components/StudentRegister';
import RegisterCourse from './Components/RegisterCourse';
import StaffVerification from './Components/StaffVerification';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';



class App extends Component{
  render(){
    return(
      
      <BrowserRouter>
      <div>
       
      <Navbar/>
        <Route exact path="/" component={StaffVerification}/>
        <Route path="/studentlogin" component={StudentLogin}/>
        <Route path="/adminlogin" component={AdminLogin}/>
        <Route path="/staffregister" component={StaffRegister}/>
        <Route path="/studentregister" component={StudentRegister}/>
        <Route path="/stafflogin" component={StaffLogin}/>

       
        

      </div>
      
      
      </BrowserRouter>
    //<div>
      //<Navbar/>
      //<StaffVerification/>
     // <StaffLogin/>
     // <StaffRegister/>
      //<StudentLogin/>
      //<StudenrRegister/>
     // <RegisterCourse/>

    //</div>
    );
  }
}

export default App;
