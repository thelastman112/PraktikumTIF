import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import DataList from '../Pages/DataList'
import Login from '../Pages/Login'
import Pweb from '../Pages/Pweb'
import Signup from '../Pages/Signup'

type Props = {}

const index = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Pweb' element={<Pweb />} />
        <Route path='/datalist' element={<DataList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index