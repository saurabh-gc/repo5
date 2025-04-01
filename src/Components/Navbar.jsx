import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{backgroundColor:'black',padding:'10px'}}>
            <NavLink to='/register' style={{marginRight:'5px',color:'white'}}>Register</NavLink>
            <NavLink to='/admin' style={{marginRight:'5px',color:'white'}}>Admin</NavLink>
        </div>
    </div>
  )
}

export default Navbar