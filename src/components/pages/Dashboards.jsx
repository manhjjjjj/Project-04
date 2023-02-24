import React from 'react'
// import { Routes, Route} from 'react-router-dom'
import Dashboard from '../home/Dashboard'
import Footer from '../home/Footer'
import Navbar from '../home/Navbar'

export default function Dashboards() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <Footer/>
    </div>
  )
}
