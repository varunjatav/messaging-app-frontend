import React, { useState } from 'react';
import apiClient from '../../Service/apiClient';
import { Link } from 'react-router-dom';

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
        <>
         <h1 className="text-2xl font-bold text-center pt-10">Registration Page</h1>
        <form onSubmit={handleSubmit} className="w-1/2  m-auto flex flex-col gap-6 pt-6">
            <input name="name" placeholder="Name" onChange={handleChange} required  className="border border-blue-500  py-2 px-3 rounded-md text-md" />
            <input name="email" placeholder="Email" onChange={handleChange} required  className="border border-blue-500  py-2 px-3 rounded-md text-md" />
            <input name="phone_number" placeholder="Phone Number" onChange={handleChange} required  className="border border-blue-500  py-2 px-3 rounded-md text-md" />
            <select name="role" onChange={handleChange} className="border border-blue-500  py-2 px-3 rounded-md text-md">
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Institute">Institute</option>
            </select>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required  className="border border-blue-500  py-2 px-3 rounded-md text-md" />
            <button type="submit" className="bg-green-600 text-white font-semibold p-2 w-1/2 rounded-md hover:bg-green-500 m-auto">Register</button>
        </form>
        <p className="text-center pt-2">
        Click here to
        <Link to={"/login"} className="font-semibold text-blue-700"> login</Link>
      </p>
        </>
    );
};

export default Register;
