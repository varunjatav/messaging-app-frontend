import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiImessage } from "react-icons/si";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <header className="flex flex-row justify-around items-center p-4">
      <section>
        <Link to={"/dashboard"}>
          <SiImessage className="text-2xl" />
        </Link>
      </section>
      <section className="flex flex-row justify-between gap-4 items-center">
        {token ? (
          <button
            className="text-sm font-semibold bg-blue-500 text-white p-2 rounded-md"
            onClick={handleLogout}
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to={"/login"} className="text-sm font-semibold">
              Login
            </Link>
            <Link to={"/register"} className="text-sm font-semibold">
              Register
            </Link>
          </>
        )}

        <Link to={"/dashboard"} className="text-sm font-semibold">
          Dashboard
        </Link>
        <Link to={"/messenger"} className="text-sm font-semibold">
          Messenger
        </Link>
      </section>
    </header>
  );
};

export default Header;
