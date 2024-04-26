import React, { useState, useEffect, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';
import '../../styles/Onboarding/ChatRoom.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import animation from '../../images/Animation-ChatRoom.json';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';
import OnboardingHeader from '../../components/OnboardingHeader';
import HRHeader from '../../components/HRHeader';

const Chatroom = ({ user, setUser }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const chatroomRef = useRef(null);

    const userName = user ? user.name : '';

    const fetchMessages = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://recruitment-and-onboarding-backend.vercel.app/messages');
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
            await fetch('https://recruitment-and-onboarding-backend.vercel.app/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, message }),
            });
            setMessage('');
            const currentScrollPosition = chatroomRef.current.scrollTop;
            fetchMessages().then(() => {
                chatroomRef.current.scrollTop = currentScrollPosition;
            });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        const currentScrollPosition = chatroomRef.current.scrollTop;
        fetchMessages().then(() => {
            chatroomRef.current.scrollTop = currentScrollPosition;
        });
        const interval = setInterval(fetchMessages, 7500);
        return () => clearInterval(interval);
    }, []);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    };

    const description = "Welcome to our integrated chatroom, where HR professionals and new employees can connect in real-time. Engage in seamless communication, ask questions, seek assistance, and foster collaboration within your organization.";
    return (
        <div>
            {user.role === "HR" ? <HRHeader user={user} setUser={setUser} /> : <OnboardingHeader user={user} setUser={setUser} />}
            <TrainingComponentHead title="Welcome to the Chatroom" description={description} animation={animation} />
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
                    <div ref={chatroomRef}></div>
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

export default Chatroom;