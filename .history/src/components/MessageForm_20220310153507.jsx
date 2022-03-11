import React from 'react'

function MessageForm() {
    const handleSubmit = () =>{

    }

    

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