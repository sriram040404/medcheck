import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <h3 className='navbar-logo'>MedCheck</h3>
        <ul className='navbar-items'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/create"><li>Create Reminder</li></Link>
            <Link to="/view"><li>View Reminders</li></Link>
            <Link to="/medicine"><li>About</li></Link>
        </ul>
    </div>
  )
}

export default NavBar