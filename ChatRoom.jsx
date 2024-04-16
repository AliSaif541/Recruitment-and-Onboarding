import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import '../../styles/Onboarding/ChatRoom.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import animation from '../../images/Animation-ChatRoom.json';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';

const Chatroom = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const token = localStorage.getItem('token');
    let user = null;

    if (token) {
        user = jwtDecode(token);
    }

    const userName = user ? user.name : '';

    const fetchMessages = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:9000/messages');
            const data = await response.json();
            const sortedMessages = data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            setMessages(sortedMessages);
        } catch (error) {
            console.error('Error fetching messages:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const sendMessage = async () => {
        if (!message.trim()) return;
        try {
            await fetch('http://localhost:9000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, message }),
            });
            setMessage('');
            await fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
        // Poll for new messages every 5 seconds
        const interval = setInterval(fetchMessages, 5000);
        return () => clearInterval(interval);
    }, []);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    };

    return (
        <div>
            <Header />
            <TrainingComponentHead title="Welcome to the Chatroom" animation={animation} />
            <div className="chat-room-container">
                <div className="messages-container">
                    {isLoading ? (
                        <div>Loading messages...</div>
                    ) : (
                        messages.map((message) => (
                            <div key={message._id} className={`message ${message.user === userName ? 'own-message' : 'other-message'}`}>
                                <div className="message-content">
                                    <div className="message-header">
                                        <span className="user-name">{message.user}</span>
                                        <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
                                    </div>
                                    <div className="message-text">{message.message}</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="message-input-container">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
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

export default Chatroom;
