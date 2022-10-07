import React from 'react'
// import './App.css';
import { useEffect,useState } from 'react';
import { Button} from 'react-bootstrap';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
// import Signup from './components/Signup';    
import { BrowserRouter } from 'react-router-dom';
export default function Login() {

    const [username,setname]=useState("")
    const [password,setlastname]=useState("")
   
   
   
   
    
  
   function savedata(){
   let jsondata={username,password}
   console.warn(jsondata)
  fetch("http://127.0.0.1:8000/login/",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(jsondata)
     }
  ).then((result)=>{
    console.warn("RESULT",result['status'])
    if (result['status']==200) {
      alert("Login Successfully")
      window.location.reload();

    }
    else{
        alert("Invalid details")
  
      }
  })
   }
  
  return (
    <center>
   
    <h1>celetel app  by Akhil</h1>
    <h4>Login </h4>
    <br/>
    <div className='mb-3'>
 username
    <input onChange={(e)=>{setname(e.target.value)}} id="username" value={username} type="text" />
  
  <br/>
  password
    <input onChange={(e)=>{setlastname(e.target.value)}} id="password" value={password} type="text" />

<br/>
  <button type='button' onClick={savedata}>Login</button>
  {/* <Link to="/wwe">dd</Link> */}
  <button type='button'  ><Link to="/signup">Signup</Link></button>
  <br/>
  <button type='button'  ><Link to="/reset">reset password</Link></button>
  <button type='button'  ><Link to="/forgetpass">forget password</Link></button>
  
</div>

    </center>

    
  )
}
