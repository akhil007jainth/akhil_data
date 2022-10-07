import React from 'react'
import { useEffect,useState } from 'react';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

export default function Reset() {
    const [username,setusername]=useState("")
    const [current_password,setpassword]=useState("")
    const [new_password,setnewpass]=useState("")
   
  
   
    
  
   function savedata(){
  //  console.warn(username,password,"DATA");
   let jsondata={username,current_password,new_password}
   let data=JSON.stringify(jsondata)
   console.warn(JSON.stringify(jsondata))
  fetch("http://127.0.0.1:8000/reset_pass/",{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:(data)
     }
  ).then((result)=>{
    console.warn("RESULT",result['status'])
    if (result['status']==200) {
      alert("Successfully reset password")
      window.location.reload();
    }
    else{
        alert("Invalid details")
  
      }
  })
   }
   
  return (
    <center>
   
    <h1>Reset password</h1>
    
    <br/>
    <div className='mb-3'>
 username
    <input onChange={(e)=>{setusername(e.target.value)}} id="username" value={username} type="text" />
  
  <br/>
  current password
    <input onChange={(e)=>{setpassword(e.target.value)}} id="password" value={current_password} type="text" />
    <br/>
   New password 
    <input onChange={(e)=>{setnewpass(e.target.value)}} id="email" value={new_password} type="text" />
    <br/>
  
<br/>
  <button type='button' onClick={savedata}>submit</button>
  <button type='button'  ><Link to="/">Home</Link></button>

  {/* <Link to="/wwe">dd</Link> */}
  {/* <button type='button'  ><Link to="/signup">Signup</Link></button> */}
  
</div>

    </center>

  )
}
