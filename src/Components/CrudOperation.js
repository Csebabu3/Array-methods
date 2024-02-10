import React from 'react'
import './App.css';
function CrudOperation() {
  return (
    <div className='main'>
        <div className='SignUp-form'>
            <h2>SignUp Here</h2>
            <form>
                <input type='text' placeholder='First Name' name='firstname' />
                <input type='text' placeholder='Last Name' name='lastname' />
                <input type='text' placeholder='Email' name='email' />
                <input type='password' placeholder='password' name='password' />
            </form>
        </div>
      
    </div>
  )
}

export default CrudOperation
