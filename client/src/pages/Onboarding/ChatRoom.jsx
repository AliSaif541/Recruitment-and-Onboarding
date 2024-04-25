import React, { useState, useEffect, useRef } from 'react';
import HRHeader from '../../components/HRHeader';
import OnboardingHeader from '../../components/OnboardingHeader';
import animation from '../../images/Animation-ChatRoom.json';
import TrainingComponentHead from '../../components/Onboarding/TrainingComponentHead';
import Footer from '../../components/Footer';
import io from "socket.io-client";
import '../../styles/Onboarding/ChatRoom.css';

const socket = io.connect("http://localhost:9000");

const Chatroom = ({ user, setUser }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef(null); // Ref for scrolling to the bottom

    const userName = user ? user.name : '';

    useEffect(() => {
        // Scroll to the bottom when messages change
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        socket.on("message_sent", (data) => {
            fetchMessages();
        });

        fetchMessages();

    }, []);

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
            socket.emit("message_sent");
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    };

    const description = "Our comprehensive HR platform is designed to facilitate a streamlined workflow. Our comprehensive HR platform is designed to facilitate a streamlined workflow.";


    return (
        <div>
            {user.role === "HR" ? <HRHeader user={user} setUser={setUser} /> : <OnboardingHeader user={user} setUser={setUser} />}
            <TrainingComponentHead title="Welcome to the Chatroom" description={description} animation={animation} />
            <div className="chat-room-container">
                <div className="messages-container">
                    {isLoading ? (
                        <div>Loading messages...</div>
                    ) : (
                        <>
                            {messages.map((message) => (
                                <div key={message._id} className={`message ${message.user === userName ? 'own-message' : 'other-message'}`}>
                                    <div className="message-content">
                                        <div className="message-header">
                                            <span className="user-name">{message.user}</span>
                                            <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
                                        </div>
                                        <div className="message-text">{message.message}</div>
                                    </div>
                                </div>
                            ))}
                            {/* Empty div to scroll to when new messages are added */}
                            <div ref={messagesEndRef} />
                        </>
                    )}
                </div>
                <div className="message-input-container">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        // onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
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
