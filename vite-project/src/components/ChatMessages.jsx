import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    const constainerElem = chatMessageRef.current;
    if (constainerElem) {
      constainerElem.scrollTop = constainerElem.scrollHeight;
    }
    console.log('updated')
  }, [chatMessages])
  return (
    <div className="chat-messages-container" ref={chatMessageRef}>
      {chatMessages.map((sasa) => {
        return (<ChatMessage message={sasa.message} sender={sasa.sender} key={sasa.id} />)
      })
      }
    </div>
  )

}

export default ChatMessages