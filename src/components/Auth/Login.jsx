import React, { useState } from "react";
import apiClient from "../../Service/apiClient";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/users/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center pt-10">Login Page</h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/2  m-auto flex flex-col gap-6 pt-6"
      >
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="border border-blue-500  py-2 px-3 rounded-md text-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="border border-blue-500  py-2 px-3 rounded-md text-md"
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold p-2 w-1/2 rounded-md hover:bg-green-500 m-auto"
        >
          Login
        </button>
      </form>
      <p className="text-center pt-2">
        Click here to
        <Link to={"/register"} className="font-semibold text-blue-700"> register</Link>
      </p>
    </>
  );
};

export default Login;
