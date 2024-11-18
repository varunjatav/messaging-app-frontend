import React, { useState } from 'react';
import apiClient from '../../Service/apiClient';

const SendMessage = ({ onMessageSent }) => {
    const [formData, setFormData] = useState({ recipientId: '', message: '' });
    const token = localStorage.getItem('token');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiClient.post('/messages', formData, {
                headers: { Authorization: token },
            });
            alert('Message sent');
            onMessageSent();
        } catch (err) {
            console.error(err);
            alert('Error sending message');
        }
    };

    return (
        <form onSubmit={handleSubmit}  className="w-1/2  m-auto flex flex-col gap-6 pt-6">
            <input name="recipientId" placeholder="Recipient ID" onChange={handleChange} required  className="border border-blue-500  py-2 px-3 rounded-md text-md"/>
            <textarea name="message" placeholder="Message" onChange={handleChange} required  className="border border-blue-500  py-2 px-3 rounded-md text-md"/>
            <button type="submit" className="bg-green-600 text-white font-semibold p-2 w-1/2 rounded-md hover:bg-green-500 m-auto">Send</button>
        </form>
    );
};

export default SendMessage;
