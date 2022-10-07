import './App.css';
import { useEffect,useState } from 'react';
import { Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import Reset from './components/Reset';
import Forgetpass from './components/Forgetpass';
// import { Routes, Route } from 'react-router';
function App() {
  // const navigate = useNavigate();
  const [data,setdata]=useState([])
  const [username,setname]=useState("")
  const [password,setlastname]=useState("")
  const [postdata,datafunc]=useState({
    username:"",
    password:""

  })
 
 let url="http://127.0.0.1:8000"
  console.log("hello")
 
  

 function savedata(){
//  console.warn(username,password,"DATA");
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
})
 }

 
  return (
   <>
   <BrowserRouter>
<Routes>
          <Route path="/" element={<Login/> } />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/forgetpass" element={<Forgetpass/>} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        </BrowserRouter>
   
   
  
   </>

  
  );
}

export default App;
