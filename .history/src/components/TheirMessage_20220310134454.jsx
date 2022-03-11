import React from 'react'

function TheirMessage({lastMessage, message}) {
    const isFirstMessageByUser =!lastMessage || lastMessage.sender
  return (
    <div>TheirMessage</div>
  )
}

export default TheirMessage