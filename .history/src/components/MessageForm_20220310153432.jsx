import React from 'react'

function MessageForm() {
    const handleSubmit = () =>{

    }

  return (
    <form className='message-form' on-submit={handleSubmit}>
        <input className='message-input'/>
        </form>
  )
}

export default MessageForm