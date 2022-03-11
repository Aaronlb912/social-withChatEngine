import React from 'react'

function MyMessage({message}) {
  if(message?.attachments?.length > 0)
    return (
    <div>MyMessage</div>
  )
}

export default MyMessage