import React, { useEffect, useState } from "react";
import apiClient from "../../Service/apiClient";
import { GoDotFill } from "react-icons/go";

const Messenger = () => {
  const [users, setUsers] = useState([]);
  const [role,setRole] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getAllUser = async () => {
    try {
      const response = await apiClient.get("/users");
      console.log("API Response:", response.data);
  
      // Assume the response structure is { user: [] }
      const usersData = response.data.user;
      if (Array.isArray(usersData)) {
        setUsers(usersData); // Set the actual array of users
      } else {
        console.error("Unexpected data structure:", usersData);
        setUsers([]); // Gracefully handle unexpected structures
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]); // Gracefully handle errors
    }
  };
  

  // Filter users based on the selected role
  useEffect(() => {
    if (Array.isArray(users)) {
        if (!role) {
          setFilteredUsers(users); // Show all users if no role is selected
        } else {
          const filtered = users.filter((user) => user.role === role);
          setFilteredUsers(filtered);
        }
      } else {
        console.error("Users is not an array:", users);
      }
  }, [role, users]);
  

  useEffect(() => {
    getAllUser();
  }, []);


  if (!Array.isArray(filteredUsers)) {
    console.error("Filtered users is not an array:", filteredUsers);
    return <p>No users available.</p>;
  }
  
  return (
    <div className="p-4 flex flex-row gap-5 bg-slate-200">
      <section className="h-[87vh] flex-1 w-[25%] rounded-xl bg-white p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
        <button className="text-sm font-semibold bg-slate-200 p-2 rounded-lg" onClick={ () => setRole("")}>All</button>
            <button className="text-sm font-semibold bg-slate-200 p-2 rounded-lg" onClick={ () => setRole("Student")}>Students</button>
            <button className="text-sm font-semibold bg-slate-200 p-2 rounded-lg" onClick={ () => setRole("Teacher")}>Teachers</button>
            <button className="text-sm font-semibold bg-slate-200 p-2 rounded-lg" onClick={ () => setRole("Institute")}>Institute</button>
        </div>
        {filteredUsers?.map((user) => {
          return (
            <div key={user.id} className="flex flex-row justify-between items-center p-2 bg-slate-200 rounded-md cursor-pointer">
              <h1 className="font-bold text-lg">{user.name}</h1>
              <GoDotFill  className="text-green-600"/>
            </div>
          );
        })}
      </section>
      <section className="h-[87vh] flex-3 w-[75%]  rounded-xl bg-white"></section>
    </div>
  );
};

export default Messenger;
