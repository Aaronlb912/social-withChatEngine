import React, { useState } from "react";

function MessageForm() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <form className="message-form" on-submit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message ..."
        x
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
}

export default MessageForm;
