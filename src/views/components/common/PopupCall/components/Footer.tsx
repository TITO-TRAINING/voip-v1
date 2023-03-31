import React, { memo } from 'react'
import Connected from './StateCall/Connected'
import Disconnect from './StateCall/Disconnect'
import Ring from './StateCall/Ring'

interface Props {
  state: string
  type: 'call to' | 'call away'
  onOK?: () => void
  onCancel?: () => void
  timing?: string | undefined
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
  switch (state) {
    case 'ring':
      return <Ring type={type} onCancel={onCancel} onOK={onOK} />

    case 'connected':
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
          <Disconnect />
        </>
      )
  }
}

Footer.defaultProps = {
  onCancel: undefined,
  onOK: undefined,
  timing: undefined
}

export default memo(Footer)
