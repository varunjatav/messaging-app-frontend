import React, { useState } from 'react';
import apiClient from '../../Service/apiClient';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        role: 'Student',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiClient.post('/users/register', formData);
            alert('Registration successful');
        } catch (err) {
            console.error(err);
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <input name="phone_number" placeholder="Phone Number" onChange={handleChange} required />
            <select name="role" onChange={handleChange}>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Institute">Institute</option>
            </select>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
