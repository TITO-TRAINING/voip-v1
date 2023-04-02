import React from 'react'
import AppRoutes from '@/routes'
import theme from './assets/theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
