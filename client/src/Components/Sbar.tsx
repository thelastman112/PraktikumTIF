import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'

type Props = {}

const Sbar = (props: Props) => {
  return (
    <Sidebar backgroundColor='#fff' defaultCollapsed={true} collapsedWidth={'0'} className={'m-0 border-r-0 shadow h-screen'}>
    <Menu className=''>
      <MenuItem routerLink={<NavLink to={'/'}/>}>Beranda</MenuItem>
      <MenuItem routerLink={<NavLink to={'/Pweb'} />}>Pemrograman Web</MenuItem>
      <MenuItem>Pemrograman Jaringan</MenuItem>
    </Menu>
  </Sidebar>
  )
}

export default Sbar