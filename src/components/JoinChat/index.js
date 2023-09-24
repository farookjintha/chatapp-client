import "./joinChat.css";
import { useState } from "react";
import Chat from "../Chat";

const JoinChat = (props) => {
  const { socket } = props;
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username && room) {
      socket.emit("join-room", room);
      console.log("Joinig the room...");
      setShowChat(true);
    }
  };

  return (
    <div>
      {!showChat ? (
        <div className="joinchat-container">
          <h2>Join the chat room</h2>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter room ID"
            onChange={(e) => setRoom(e.target.value)}
          />

          <button onClick={joinRoom}>Join room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
};

export default JoinChat;
