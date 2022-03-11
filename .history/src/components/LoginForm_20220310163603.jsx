import React, { useState } from 'react'
import axios from 'axios'

function LoginForm() {
    cosnt [username, setUsername] = useState('')
    cosnt [password, setPassword] = useState('')

  return (
    <div className='wrapper'><div className="form">
        <h1 className="title">
            Chat Application</h1>
            </div></div>
  )
}

export default LoginForm