import React, { memo } from 'react'
import { STATE_CALL } from '@/constants/PopupCall'
import Connected from './StateCall/Connected'
import Ring from './StateCall/Ring'

interface Props {
  state: string
  type: 'call to' | 'call away'
  onOK?: () => void
  onCancel?: () => void
  timing?: string
  isConnected: boolean
}

const Footer: React.FC<Props> = ({
  type,
  state,
  onCancel,
  onOK,
  timing,
  isConnected,
}) => {
  const [{ typeOfState: ring }, { typeOfState: connected }] = STATE_CALL

  switch (state) {
    case ring:
      return <Ring type={type} onCancel={onCancel} onOK={onOK} />

    case connected:
      return (
        <>
          {isConnected && <p className='time'>{timing}</p>}
          <Connected onCancel={onCancel} />
        </>
      )

    default:
      return (
        <>
          {isConnected && <p className='time'>{timing}</p>}
          <p className='status'>Cuộc gọi đã kết thúc</p>
        </>
      )
  }
}

Footer.defaultProps = {
  onCancel: undefined,
  onOK: undefined,
  timing: undefined,
}

export default memo(Footer)
