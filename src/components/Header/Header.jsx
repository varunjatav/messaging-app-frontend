import React from 'react'
import { Link } from 'react-router-dom'
import { SiImessage } from "react-icons/si";

const Header = () => {
  return (
    <header className='flex flex-row justify-around items-center p-4'>
      <section>
        <Link to={"/dashboard"}>
        <SiImessage className='text-2xl'/>
        </Link>
      
      </section>
      <section className='flex flex-row justify-between gap-4 items-center'>
        <Link to={"/login"} className='text-sm font-semibold'>Login</Link>
        <Link to={"/register"} className='text-sm font-semibold'>Register</Link>
        <Link to={"/dashboard"} className='text-sm font-semibold'>Dashboard</Link>
      </section>
    </header>
  )
}

export default Header