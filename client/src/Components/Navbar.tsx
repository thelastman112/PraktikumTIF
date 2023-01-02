import React, { useState } from 'react'
import { useProSidebar } from 'react-pro-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Navbar = (props: Props) => {
  const { collapseSidebar } = useProSidebar();
  return (
    <nav className={`flex justify-between z-50 border-gray-500 px-2 sm:px-4 py-2 bg-cyan-900 text-white sticky top-0 ${props.className}`}>
      <div className='container flex flex-wrap'>
        <button className='block' onClick={() => collapseSidebar()}>
          <GiHamburgerMenu />
        </button>
        <NavLink to={"/"}>
          <h1 className='block py-2 pl-3 pr-4'>Home</h1>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/Login"} className={"block py-2 pl-3 pr-4"}>Login</NavLink>
      </div>
    </nav>
  )
}

export default Navbar