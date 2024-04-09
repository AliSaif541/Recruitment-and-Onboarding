import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
 
const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    // const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const token = localStorage.getItem("token");

  let user = null;

  if (token) {
    user = jwtDecode(token);
    // console.log("user: ", user);
  }

  const userName = user.name;
 
    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:9000/messages');
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
 
    const sendMessage = async () => {
        try {
            await fetch('http://localhost:9000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, message }),
            });
 
            setMessage('');
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
 
    useEffect(() => {
        fetchMessages();
        const interval = setInterval(() => {
            fetchMessages();
        }, 2000);
 
        return () => clearInterval(interval);
    }, []);
 
    return (
        <div>
            <h2>Chat Room</h2>
            <ul>
                {messages.map((message) => (
                    <li key={message._id}>
                        <strong>{message.user}:</strong> {message.message}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};
 
export default ChatRoom;