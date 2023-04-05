import React, { memo } from 'react'
import cancel from '@/assets/images/cancel.svg'
import answer from '@/assets/images/answer.svg'
import { DATA_TYPE_OF_CALL } from '@/constants/popupCall'

interface Props {
  type: 'call to' | 'call away'
  onOK?: () => void
  onCancel?: () => void
}

const Ring: React.FC<Props> = ({ type, onCancel, onOK }) => {
  switch (type) {
    case DATA_TYPE_OF_CALL.callTo:
      return (
        <div className='footer__button'>
          <button onClick={onCancel}>
            <figure>
              <img src={cancel} alt='' />
            </figure>
          </button>
          <button onClick={onOK}>
            <figure>
              <img src={answer} alt='' />
            </figure>
          </button>
        </div>
      )

    default:
      return (
        <>
          <p className='status'>Đang đổ chuông...</p>
          <button onClick={onCancel}>
            <figure>
              <img src={cancel} alt='' />
            </figure>
          </button>
        </>
      )
  }
}

Ring.defaultProps = {
  onOK: undefined,
  onCancel: undefined,
}

export default memo(Ring)
