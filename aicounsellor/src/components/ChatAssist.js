import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../config";
import MessageParser from "../MessageParser";
import ActionProvider from "../ActionProvider";
import "./ChatAssist.css";
const ChatAssist = () => {
  const [toggle, setToggle] = useState(false);
  const closeHandler = () => {
    setToggle(!toggle);
    if (toggle) {
      document.getElementsByClassName(
        "react-chatbot-kit-chat-container"
      )[0].style.display = "none";
    } else {
      document.getElementsByClassName(
        "react-chatbot-kit-chat-container"
      )[0].style.display = "block";
    }
  };
  return (
    <div className="chatcontainer">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <button className="close" onClick={closeHandler}>
        Toggle Chat
      </button>
    </div>
  );
};

export default ChatAssist;
