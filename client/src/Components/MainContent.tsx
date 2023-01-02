import React from 'react'
import pendaftaran  from '../img/pendaftaran.jpg';

type Props = {}

const MainContent = (props: Props) => {
  return (
    <div className='flex justify-center items-center h-full'>
        <img src={pendaftaran} alt="pendaftaran" className='h-4/5 max-h-[80vh] object-contain'/>
    </div>
  )
}

export default MainContent