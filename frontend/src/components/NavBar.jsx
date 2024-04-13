import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
          <img src=".\src\assets\favicon-32x32.png" alt="Logo"/>
          <h4>MedCheck</h4>
        </div>
        <ul className='navbar-items'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/create"><li>Create Reminder</li></Link>
            <Link to="/view"><li>View Reminders</li></Link>
            <Link to="/medicine"><li>Medicines</li></Link>
        </ul>
    </div>
  )
}

export default NavBar