import { Button } from 'antd'
import React, { useCallback, useState } from 'react'
import PopupCall from './common/PopupCall'
import FAKE_DATA from './common/PopupCall/constants/customer'
import theme from '@/assets/theme'
import { ThemeProvider } from 'styled-components'

const Components = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [timing, setTiming] = useState('')

  const isOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleOK = useCallback(() => {
    setTiming('00:04')
  }, [])

  const handleCancel = useCallback(() => {
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }, [])

  return (
    <ThemeProvider theme={theme} >
      <PopupCall
        open={open}
        onOK={handleOK}
        onCancel={handleCancel}
        type='call to'
        timing={timing}
        customer={FAKE_DATA}
      >
        <Button onClick={isOpen}>Call me!</Button>
      </PopupCall>
    </ThemeProvider>
  )
}

export default Components
