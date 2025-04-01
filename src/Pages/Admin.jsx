import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const navigate=useNavigate()

    const loginHandler=()=>{
        if(username==='abc' && password==='abc123'){
            navigate('/studentinfo')
        }else{
            alert('Invalid Username and Password...')
            setUsername('')
            setPassword('')
        }
    }

  return (
    <div>
        <br />
        <div>
            <label htmlFor="uname">Username: </label>
            <input type="text" id='uname' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <br /><br />
            <label htmlFor="pass">Password: </label>
            <input type="password" id='pass'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br /><br />
            <button onClick={loginHandler}>Login</button>
        </div>
    </div>
  )
}

export default Admin