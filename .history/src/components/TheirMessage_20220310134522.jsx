import React from 'react'

function TheirMessage({lastMessage, message}) {
    const isFirstMessageByUser =!lastMessage || lastMessage.sender.username !=== message.sender,use
  return (
    <div>TheirMessage</div>
  )
}

export default TheirMessage