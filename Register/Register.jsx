import { useState } from 'react'
import './register.css'
import { formValidation } from '../../utilis/validatation'
// import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const [error, setError] = useState('');

  const handleInput = (e) => {
      setData({...data, 
      [e.target.name] : e.target.value
      })
  }
 
  const handleSignUp = async (e) => {
    e.preventDefault()
    
    setError(formValidation(data))
    console.log(data);
  }

  return (
    <div className='signup-wrapper'>
      <div className='form-text-wrapper'>
        <h2>Please Singup here....</h2>
      <div className="form-wrapper-inner">
      <form onSubmit={handleSignUp}>
          <input type="text" name='name' placeholder='Name' value={data.name}  onChange={handleInput} /> <span>{error.name}</span>
          <input type="email" name='email' placeholder='Email' value={data.email} onChange={handleInput} /> <span>{error.email}</span>
          <input type="password" name='password' placeholder='Password' value={data.password} onChange={handleInput} /> <span>{error.password}</span>
          <input type="password" name='confirmpassword' placeholder='Confirm Password' value={data.confirmpassword} onChange={handleInput} /> <span>{error.confirmpassword}</span>
          <input type="submit" value="Submit" />
        </form>
      </div>
      
      <p className='account-redirect-btn'>  Already have an account ? <span></span> </p> 
      
      </div>
      


    </div>
  )
}