import { DATA_TYPE_OF_CALL } from '@/constants/popupCall'
import React, { memo } from 'react'

interface Props {
  type: 'call to' | 'call away'
  phoneNumber: string
}

const Header: React.FC<Props> = ({ type, phoneNumber }) => {
  const day = new Date()
  const hour = day.getHours().toString().padStart(2, '0')
  const minute = day.getMinutes().toString().padStart(2, '0')

  const timeStart = `${hour}:${minute}`

  return (
    <>
      {type === DATA_TYPE_OF_CALL.callAway && <p className='title phone'>{phoneNumber}</p>}
      <p className='title'>Cuộc gọi đến {timeStart}</p>
    </>
  )
}

export default memo(Header)
