import { useState } from "react";
import "../styles/OpenGroup.css";

type Message = {
  id: number;
  text: string;
  sender: "you" | "other";
};

export default function OpenGroup() {
  const [activeTab, setActiveTab] = useState<string>("Feed");

  return (
    <div className="open-group">
      <div className="tabs">
        <button onClick={() => setActiveTab("Feed")}>Feed</button>
        <button onClick={() => setActiveTab("Chat")}>Chat</button>
        <button onClick={() => setActiveTab("Members")}>Members</button>
      </div>
      <div className="content">
        {activeTab === "Feed" && <div>Feed content goes here...</div>}
        {activeTab === "Chat" && (
          <div className="chat-box">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
        )}
        {activeTab === "Members" && (
          <ul>
            {members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
