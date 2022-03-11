import React from 'react'

function MyMessage({message}) {
  if(message?.attachments?.length > 0){
    return(
        <img src={message.attch}/>
    )

  }
    return (
    <div>MyMessage</div>
  )
}

export default MyMessage