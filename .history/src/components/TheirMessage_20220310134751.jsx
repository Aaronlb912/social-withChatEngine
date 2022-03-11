import React from 'react'

function TheirMessage({lastMessage, message}) {
    const isFirstMessageByUser =!lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className='message-row'>{isFirstMessageByUser &&(
        <div
            className='message-avatar'
            style={{backg}}
        />
    )}</div>
  )
}

export default TheirMessage