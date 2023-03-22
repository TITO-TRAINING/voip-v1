import { Button } from 'antd'
import React, { useCallback, useState } from 'react'
import PopupCall from './common/PopupCall'
import FAKE_DATA from './common/PopupCall/constants/customer'

const Components = () => {
  const [open, setOpen] = useState(false)
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
  )
}

export default Components
