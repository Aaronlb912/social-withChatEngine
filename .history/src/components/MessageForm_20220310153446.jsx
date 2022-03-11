import React from 'react'

function MessageForm() {
    const handleSubmit = () =>{

    }

  return (
    <form className='message-form' on-submit={handleSubmit}>
        <input className='message-input'
        placeholder='Send a message ...'
        value={}/>
        </form>
  )
}

export default MessageForm