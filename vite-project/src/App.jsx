import { useState, } from 'react'
import './App.css';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';


function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot", sender: "user", id: 'id1'
    }, {
      message: "Hello! How can I help you?t", sender: "robot", id: 'id2'
    }, {
      message: "can you please give today date?", sender: "user", id: 'id3'
    }, {
      message: "Today is December 4", sender: "robot", id: 'id4'
    },
    {
      message: "how about flip coin", sender: "user", id: 'id5'
    },
    { message: "Sure! You got heads", sender: "robot", id: 'id6' }]
  )

  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
