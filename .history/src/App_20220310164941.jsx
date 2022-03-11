import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {

if(!localStorage.getItem('username')) return <LoginForm/> 

  return (
    <ChatEngine
      height="100vh"
      projectID="f361cf00-0da5-411d-b74b-7e90cff24cd1"
      userName="javscriptmastery"
      userSecret="2346wxyZ"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
