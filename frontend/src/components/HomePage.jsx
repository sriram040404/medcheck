import React from 'react'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage-text'>
        <h1>Welcome to MedCheck </h1>
        <p>MedCheck is a simple app to help you keep track of your medications and appointments.</p>
      </div> 
      <div className='homepage-info'>
        <p>You can</p>
          <ul>
            <li>Create Reminders</li>
            <li>View Reminders</li>
            <li>Get Notifications</li>
          </ul>
          <p>for you regular medicine schedules</p>
      </div>
    </div>
  )
}

export default HomePage