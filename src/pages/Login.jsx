import React from 'react'
import AuthForm from '../components/Login/AuthForm'

const Login = ({theme}) => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <AuthForm  theme={theme}/>
    </div>
  )
}

export default Login
