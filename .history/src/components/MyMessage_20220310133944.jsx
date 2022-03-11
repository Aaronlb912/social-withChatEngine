import React from 'react'

function MyMessage({message}) {
  if(message?.attachments?.length > 0){
    return(
        <img src={message.attachments[0]}/>
    )

  }
    return (
    <div>MyMessage</div>
  )
}

export default MyMessage