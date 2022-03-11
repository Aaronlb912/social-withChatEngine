import React, { useState } from "react";
import {sendMessage, isTyping} from 

function MessageForm() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {};

  const handleChange = (event) => {
    setValue(event.target.value);
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
