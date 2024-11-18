import React, { useEffect, useState } from 'react';
import apiClient from '../../Service/apiClient';
import MessageList from '../Message/MessageList';
import SendMessage from '../Message/SendMessage';

const Dashboard = () => {
    const [messages, setMessages] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await apiClient.get('/messages', {
                    headers: { Authorization: token },
                });
                setMessages(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchMessages();
    }, [token]);

    return (
        <div>
            <h1 className='text-lg text-center font-bold'>Dashboard</h1>
            <SendMessage onMessageSent={() => window.location.reload()} />
            <MessageList messages={messages} />
        </div>
    );
};

export default Dashboard;
