import React, { useEffect, useState } from "react";
import apiClient from "../../Service/apiClient";


const Dashboard = () => {

    const [updateUser, setUpdateUser] = useState({
        name: '',
        email: '',
        phone_number: '',
        role: 'Student',
        password: '',
    })

    

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await apiClient(`users/${localStorage.getItem('id')}`);
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setUpdateUser({[event.target.name]:event.target.value})
    };
    

  return (
    <div className="bg-slate-300 h-[90vh]">
      <h1 className="text-lg text-center font-bold py-3">Dashboard</h1>
      <section className="w-[1000px] m-auto bg-white h-[90%] rounded-md p-4">
        <h2 className="text-lg text-center font-bold py-3">
          Update Your Account
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 pt-2">
            <label htmlFor="name" className=" text-md font-bold">
              Update Your Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your User Name"
              className="border-2 border-slate-400 p-1 rounded-sm"
              onChange={handleChange}  
            />
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <label htmlFor="email" className="text-md font-bold">
              Update Your Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your New Email"
              className=" border-2 border-slate-400 p-1 rounded-sm"
              onChange={handleChange}  
            />
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <label htmlFor="password" className="text-md font-bold">
              Update Your Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your New Email"
              className="border-2 border-slate-400 p-1 rounded-sm"
              onChange={handleChange}  
            />
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <label htmlFor="phone_number" className="text-md font-bold">
              Update Your Phone Number:
            </label>
            <input
              id="phone_number"
              type="text"
              placeholder="Enter Your Phone Number"
              className="border-2 border-slate-400 p-1 rounded-sm"
              onChange={handleChange}  
            />
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <label htmlFor="role" className="text-md font-bold">
              Update Your User Role:
            </label>
            <select
              id="role"
              name="role"
              className="border-2 border-slate-400 p-1 rounded-sm"
              onChange={handleChange}  
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Institute">Institute</option>
            </select>
          </div>
          <div className="pt-2 flex justify-between">
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-1 px-2 rounded-md hover:bg-green-500 s"
            >
              Update
            </button>
            <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-2 rounded-md">
              Delete
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
