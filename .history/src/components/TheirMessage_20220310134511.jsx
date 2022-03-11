import React from 'react'

function TheirMessage({lastMessage, message}) {
    const isFirstMessageByUser =!lastMessage || lastMessage.sender.username !===
  return (
    <div>TheirMessage</div>
  )
}

export default TheirMessage