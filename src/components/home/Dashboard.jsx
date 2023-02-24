import React from 'react'
import { Routes, Route} from 'react-router-dom'
import DashBoard from '../extra/DashBoardHeard'



export default function Dashboard() {
  return (
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
    </Routes>
  )
}
