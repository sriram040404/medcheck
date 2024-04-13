import React from 'react'

const CreateReminder = () => {
  cons

  return (
    <div className='create-reminder'>
      <h1>Create a Reminder</h1>
      <form className='create-reminder-form'>
        <table className='create-reminder-table'>
          <tr>
            <td>Name</td>
            <td className='create-reminder-form-inputs'><input type="text" name="name" /></td>
          </tr>
          <tr>
            <td>Medicines</td>
            <td className='create-reminder-form-inputs'><textarea type="text" name="medicines" /></td>
          </tr>
          <tr>
            <td>Time</td>
            <td className='create-reminder-form-inputs'><input type="time" name="time" /></td>
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