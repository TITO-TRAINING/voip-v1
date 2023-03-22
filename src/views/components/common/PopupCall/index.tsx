import React, { useState, memo, useCallback, ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import PopupCallCustom from './style'
import Close from '../../icons/Close'
import { data } from '@/views/types/customer'

interface PopupCallProps {
  children: ReactNode
  type: 'call to' | 'call away'
  open: boolean
  onOK?: () => void
  onCancel?: () => void
  timing?: string
  customer: data
}

const PopupCall: React.FC<PopupCallProps> = ({
  children,
  type,
  open,
  onOK,
  onCancel,
  timing,
  customer,
}) => {
  const [stateCall, setStateCall] = useState('ring')
  const [isConnected, setIsConnected] = useState(false)
  const { name, avatar, phoneNumber } = customer

  const handleOK = useCallback(() => {
    if (onOK) {
      onOK()
    }
    setStateCall('connected')
    setIsConnected(true)
  }, [onOK])

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel()
    }
    setStateCall('disconnect')
  }, [onCancel])

  return (
    <>
      {children}
      <PopupCallCustom
        width={360}
        closeIcon={<Close />}
        open={open}
        title={<Header type={type} phoneNumber={phoneNumber} />}
        footer={
          <Footer
            state={stateCall}
            type={type}
            onCancel={handleCancel}
            onOK={handleOK}
            timing={timing}
            isConnected={isConnected}
          />
        }
      >
        <Content
          type={type}
          name={name}
          phoneNumber={phoneNumber}
          avatar={avatar}
        />
      </PopupCallCustom>
    </>
  )
}

PopupCall.defaultProps = {
  onOK: undefined,
  onCancel: undefined,
}

export default memo(PopupCall)
