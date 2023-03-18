import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Views
import Dashboard from '@/views/dashboard'
import Components from '@/views/components'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='components' element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
