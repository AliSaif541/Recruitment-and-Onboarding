import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import '../../styles/Onboarding/ChatRoom.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import animation from '../../images/Animation-ChatRoom.json'
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('token');
    let user = null;

    if (token) {
        user = jwtDecode(token);
    }

    const userName = user ? user.name : '';

    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:9000/messages');
            const data = await response.json();
            // Sort messages by timestamp before setting state
            const sortedMessages = data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            setMessages(sortedMessages);
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
        const interval = setInterval(fetchMessages, 2000);

        return () => clearInterval(interval);
    }, []);

    // Filter messages for other users and current user
    const otherUserMessages = messages.filter((msg) => msg.user !== userName);
    const currentUserMessages = messages.filter((msg) => msg.user === userName);

    const description = "Join our vibrant chatroom where new employees can connect with fellow colleagues and HR professionals. Dive into discussions, share experiences, and build meaningful connections as you navigate your journey with us.";

    return (
        <div>
            <Header />
            <TrainingComponentHead title="Welcome to the Chatroom" description={description} animation={animation} />
            <div className="chat-room-container">

                <div className="messages-container">
                    <div className="other-messages">
                        {otherUserMessages.map((message) => (
                            <div key={message._id} className="message other-message">
                                <div className="message-content">
                                    <div className="message-header">
                                        <span className="user-name">{message.user}</span>
                                        <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
                                    </div>
                                    <div className="message-text">{message.message}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="own-messages">
                        {currentUserMessages.map((message) => (
                            <div key={message._id} className="message own-message">
                                <div className="message-content">
                                    <div className="message-header">
                                        <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
                                        <span className="user-name">{message.user}</span>
                                    </div>
                                    <div className="message-text">{message.message}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="message-input-container">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="send-button" onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// Function to format timestamp
const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    return formattedTime;
};

export default ChatRoom;
