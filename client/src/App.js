// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 import AXIOS from 'axios'
import Allrecords from './allrecords';
function App() {
  const [user,setUser]=useState("")
  const addData=()=>{
    const url="http://localhost:9000/dataregister";
    AXIOS.post(url,{user}).then((res)=>{
       alert(res.data)
    })  
  }
  return (
   <div className='App'> 
    <form onSubmit={addData}> 
    <input type='text'onChange={(e)=>setUser(e.target.value)} placeholder='enter Your Name'/> 
    <button type='submit'>
      addData
       </button>
        </form>
        <h1> Detail</h1>
        <div>
         <Allrecords/> 
        </div>
    </div>
  );
}

export default App;
