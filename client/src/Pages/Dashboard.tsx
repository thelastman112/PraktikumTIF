import React, { useState } from 'react'
import Main from '../Layouts/Main'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import Navbar from '../Components/Navbar';
import MainContent from '../Components/MainContent';
import { NavLink } from 'react-router-dom';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    // <Main>Dashboard</Main>
    <div className='h-screen flex flex-col'>
      <Navbar className='col-span-2 h-14' />
      <div className='flex overflow-y-hidden'>
        <Sidebar backgroundColor='#fff' defaultCollapsed={true} collapsedWidth={'0'} className={'m-0 border-r-0 shadow h-screen'}>
          <Menu className=''>
            <MenuItem routerLink={<NavLink to={'/Pweb'} />}>Pemrograman Web</MenuItem>
            <MenuItem>Pemrograman Jaringan</MenuItem>
          </Menu>
        </Sidebar>
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