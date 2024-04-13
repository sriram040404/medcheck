import React,{useState} from 'react'

const CreateReminder = () => {
  const [medicineName, setMedicineName] = useState('')
  const [description, setDescription] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reminder ={
      medicineName: medicineName,
      description: description,
      time: time
    }
    const url="http://localhost:5000/create"
    const options={
      method : 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(reminder)
    }
    const response = await fetch(url,options)
    if(response.status!==201 && response.status!==200){
      const data=await response.json()
      alert(data.message)
    }
    else{
      alert('Reminder Created Successfully')
      setDescription('')
      setMedicineName('')
      setTime('')
      window.location.href='/view'
    }

  }

  return (
    <div className='create-reminder'>
      <h1>Create a Reminder</h1>
      <form className='create-reminder-form' onSubmit={handleSubmit}>
        <table className='create-reminder-table'>
          <tr>
            <td>Medicine Name</td>
            <td className='create-reminder-form-inputs'><input type="text" name="medicineName" value={medicineName} onChange={(e)=>{setMedicineName(e.target.value)}}  /></td>
          </tr>
          <tr>
            <td>Description</td>
            <td className='create-reminder-form-inputs'><textarea type="text" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}  /></td>
          </tr>
          <tr>
            <td>Time</td>
            <td className='create-reminder-form-inputs'><input type="time" name="time" value={time} onChange={(e)=>{setTime(e.target.value)}}  /></td>
          </tr>
          <tr>
            <td colSpan={2} style={{textAlign:'center'}}><button type='submit'>Create Reminder</button></td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default CreateReminder