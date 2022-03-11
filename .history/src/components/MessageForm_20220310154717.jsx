import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import {SendOutlined, PicturedOutlined} from '@ant-design/icons'

function MessageForm(props) {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = () =>{
      
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message ..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
            <PicturedOutlined className="picture-icon"/></span>
      </label>
      <input tyype='file' multiple={false} id='upload-button' style={{display: 'none'}} onChange={handleUpload}/>
    </form>
  );
}

export default MessageForm;
