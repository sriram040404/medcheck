import React,{useEffect, useState} from 'react'

const ViewReminders = () => {
  const [reminders, setReminders] = useState([])

  useEffect(()=>{
    fetchReminders();
  },[]) 

  const fetchReminders= async()=>{
    const url="http://localhost:5000/reminders"
    const response= await fetch(url)
    const data= await response.json()
    setReminders(data)
  }
  function returnReminders(reminder){
    return <div key={reminder.id}>
      <h3>{reminder.medicineName}</h3>
      <p>{reminder.description}</p>
      <p>{reminder.time}</p>
    </div>
  }

  return (
    <div>
      <div className='view-reminder'>
      <h1>All Reminders</h1>
      <h2>{reminders.map(returnReminders)}</h2>
      </div>
    </div>
  )
}

export default ViewReminders