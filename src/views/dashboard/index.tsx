import React, { CSSProperties, useEffect, useState } from 'react'

// Components
import { Spin } from 'antd'

// Image
import Logo from '@/assets/images/logo.png'
import { Link } from 'react-router-dom'

// styles
const dashboardStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '80vh',
}

const logoStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const titleStyle: CSSProperties = {
  fontSize: '50px',
}

const Dashboard = () => {
  const [isShowLoading, setIsShowLoading] = useState<boolean>(true)

  // should show loading 2s first
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={dashboardStyle}>
      {isShowLoading ? (
        <Spin size='large' />
      ) : (
        <>
          <figure style={logoStyle}>
            <img src={Logo} alt='logo' />
            <figcaption style={titleStyle}>Welcome to Voip</figcaption>
          </figure>
          <Link to='components'>Go to test components</Link>
        </>
      )}
    </div>
  )
}

export default Dashboard
