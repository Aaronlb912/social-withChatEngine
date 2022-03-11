import React from 'react'

function MessageForm() {
    const handleSubmit = () =>{

    }

    const hande

  return (
    <form className='message-form' on-submit={handleSubmit}>
        <input className='message-input'
        placeholder='Send a message ...'
        value={value}
        onChange={handleChange}/>
        </form>
  )
}

export default MessageForm