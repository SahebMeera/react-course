
import { useState } from "react"
import { Chatbot } from "supersimpledev"

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')
  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function sendMessage() {
    const newChatbotMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }

    ]
    setChatMessages(newChatbotMessage)
    const response = Chatbot.getResponse(inputText)
    setChatMessages([
      ...newChatbotMessage,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }

    ])
    setInputText('');

  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size="30"
        onChange={saveInputText} className="chat-input"
        value={inputText}></input>
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  )
}

export default ChatInput