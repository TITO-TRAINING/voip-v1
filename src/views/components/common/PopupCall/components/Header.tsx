import React, { memo } from 'react'

interface Props {
  type: 'call to' | 'call away'
  phoneNumber: string
}

const Header: React.FC<Props> = ({ type, phoneNumber }) => {
  const day = new Date()
  const timeStart = `${day.getHours()}:${day.getMinutes()}`

  return (
    <>
      {type === 'call away' && <p className='title phone'>{phoneNumber}</p>}
      <p className='title'>Cuộc gọi đến {timeStart}</p>
    </>
  )
}

export default memo(Header)
