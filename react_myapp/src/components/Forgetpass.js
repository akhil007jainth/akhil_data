import React from 'react'
import { useEffect,useState } from 'react';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

export default function Forgetpass() {
    const [email,setemail]=useState("")
    const [password,setnewpass]=useState("")
  
   
  
   function savedata(){
   let jsondata={email,password}
   let data=JSON.stringify(jsondata)
   console.warn(JSON.stringify(jsondata))
  fetch("http://127.0.0.1:8000/forgetpass/",{
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
      alert("email is valid your new password is created")
   
      window.location.reload();
    }
    else{
      alert("Invalid details")

    }
  })
   }
   
  return (
    <center>
   
    <h1>Forget password</h1>
    
    <br/>
    <div className='mb-3'>
 
   Enter valid email
    <input onChange={(e)=>{setemail(e.target.value)}} id="password" value={email} type="text" />
    <br/>
   New password 
    <input onChange={(e)=>{setnewpass(e.target.value)}} id="email" value={password} type="text" />
    <br/>
  
<br/>
  <button type='button' onClick={savedata}>submit</button>
  <button type='button'  ><Link to="/">Home</Link></button>

 
  
</div>

    </center>

  )
}
