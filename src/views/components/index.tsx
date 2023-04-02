import { Button } from 'antd'
import React, { useCallback, useState } from 'react'
import PopupCall from '@/components/common/PopupCall'
import { FAKE_DATA_CUSTOMER } from '@/constants/Customer'

const Components = () => {
  const [open, setOpen] = useState<boolean>(false)

  const isOpen = useCallback(() => {
    setOpen(true)
  }, [])

  return (
    <PopupCall open={open} type='call to' customer={FAKE_DATA_CUSTOMER}>
      <Button onClick={isOpen}>Call me!</Button>
    </PopupCall>
  )
}

export default Components
