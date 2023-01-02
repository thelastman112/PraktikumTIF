import React from 'react'
import { MenuItem, Sidebar, Menu } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'
import Navbar from '../Components/Navbar'

type Props = {}

const Pweb = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className='flex w-screen'>
        <Sidebar defaultCollapsed={true} collapsedWidth={'0'}>
          <Menu>
            <MenuItem><NavLink to={"/Pweb"}>Pemrograman Web</NavLink></MenuItem>
            <MenuItem>Pemrograman Jaringan</MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ display: 'flex', padding: 10 }} className='w-full justify-center'>
          <div className='container p-5'>
            <h1>Formulir Kirim Tugas</h1>
            <form className=''>
              <div>
                <label htmlFor="Tugas" className='py-4'>Link Tugas</label>
                <input type="text" className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder='Google Drive, Dropbox,...' />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default Pweb