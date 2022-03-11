import React, { useState } from "react";
import {sendMessage, isTyping} from 'react-chat-engine'

function MessageForm() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {};

  const handleChange = (event) => {
    setValue(event.target.value);
    
    isTyping
};

  return (
    <form className="message-form" on-submit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message ..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
}

export default MessageForm;
