import React, { memo } from 'react'
import cancel from '@/assets/images/cancel.svg'

interface Props {
  onCancel?: () => void
}

const Connected: React.FC<Props> = ({ onCancel }) => {
  return (
    <>
      <p className='status'>Đã kết nối</p>
      <button onClick={onCancel}>
        <img src={cancel} alt='' />
      </button>
    </>
  )
}

Connected.defaultProps = {
  onCancel: undefined,
}

export default memo(Connected)