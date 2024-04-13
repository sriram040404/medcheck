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
    return <div className='reminder' key={reminder.id}>
      <h3>Tablet: {reminder.medicineName}</h3>
      <p>Descritpion: {reminder.description}</p>
      <p>Time: {reminder.time}</p>
    </div>
  }

  return (
    <div>
      <div className='view-reminder'>
      <h1>All Reminders</h1>
      <div className='reminder-div'>{reminders.map(returnReminders)}</div>
      </div>
    </div>
  )
}

export default ViewReminders