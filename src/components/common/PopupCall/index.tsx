import React, { useState, memo, useCallback, ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import { dataCustomerCall } from '@/types/Customer'
import { DATA_STATE_CALL } from '@/constants/popupCall'
import { ReactComponent as Close } from '@/assets/icons/Close.svg'
import PopupCallCustom from './style'

interface PopupCallProps {
  children: ReactNode
  type: 'call to' | 'call away'
  open: boolean
  onOK?: () => void
  onCancel?: () => void
  timing?: string
  customer: dataCustomerCall
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
  const [stateCall, setStateCall] = useState<string>(DATA_STATE_CALL.ring)
  const [isConnected, setIsConnected] = useState(false)
  const { name, avatar, phoneNumber } = customer

  const handleOK = useCallback(() => {
    if (onOK) {
      onOK()
    }
    setStateCall(DATA_STATE_CALL.connected)
    setIsConnected(true)
  }, [onOK])

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel()
    }
    setStateCall(DATA_STATE_CALL.disconnect)
  }, [onCancel])

  return (
    <>
      {children}
      <PopupCallCustom
        closeIcon={<Close />}
        width={360}
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
  timing: undefined,
}

export default memo(PopupCall)
