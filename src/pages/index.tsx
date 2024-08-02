import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../components/organisms/Home'
import FinanceTracker from '../components/organisms/FinanceTracker'
export default function FinanceTrackerPage() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<FinanceTracker/>} />
    </Routes>
    </BrowserRouter>
  )
}

