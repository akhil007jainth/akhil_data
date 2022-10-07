import React from 'react'
import { useEffect,useState } from 'react';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

export default function Signup() {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")
    const [name,setname]=useState("")
   
   
   let url="http://127.0.0.1:8000"
    console.log("hello")
   
    
  
   function savedata(){
  //  console.warn(username,password,"DATA");
   let jsondata={name,email,username,password}
   let data=JSON.stringify(jsondata)
   console.warn(JSON.stringify(jsondata))
  fetch("http://127.0.0.1:8000/signup/",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:(data)
     }
  ).then((result)=>{
    console.warn("RESULT",result['status'])
    if (result['status']==200) {
      alert("Successfully created")
      window.location.reload();
    }
    else{
        alert("Invalid details")
  
      }
  })
   }
   
  return (
    <center>
   
    <h1>Signup</h1>
    name  
    <input onChange={(e)=>{setname(e.target.value)}} id="email" value={name} type="text" />

    <br/>
    <div className='mb-3'>
 username
    <input onChange={(e)=>{setusername(e.target.value)}} id="username" value={username} type="text" />
  
  <br/>
  password
    <input onChange={(e)=>{setpassword(e.target.value)}} id="password" value={password} type="text" />
    <br/>
   email   
    <input onChange={(e)=>{setemail(e.target.value)}} id="email" value={email} type="text" />
    <br/>
  
<br/>
  <button type='button' onClick={savedata}>signup</button>
  {/* <Link to="/wwe">dd</Link> */}
  <button type='button'  ><Link to="/">Home</Link></button>
  
</div>

    </center>

  )
}
