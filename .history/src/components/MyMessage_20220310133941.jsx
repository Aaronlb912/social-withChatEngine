import React from 'react'

function MyMessage({message}) {
  if(message?.attachments?.length > 0){
    return(
        <img src={message.attachments}/>
    )

  }
    return (
    <div>MyMessage</div>
  )
}

export default MyMessage