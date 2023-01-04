import React, { useState } from 'react'
import Main from '../Layouts/Main'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import Navbar from '../Components/Navbar';
import MainContent from '../Components/MainContent';
import { NavLink } from 'react-router-dom';
import Sbar from '../Components/Sbar';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    // <Main>Dashboard</Main>
    <div className='h-screen flex flex-col'>
      <Navbar className='col-span-2 h-14' />
      <div className='flex overflow-y-hidden'>
        <Sbar/>
        <main className='w-full overflow-y-scroll px-3'>
          <MainContent/>
          <MainContent/>
          <MainContent/>
          <MainContent/>
        </main>
      </div>
    </div>
  )
}

export default Dashboard