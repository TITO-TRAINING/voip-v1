import React, { memo } from 'react'
import { TYPE_OF_CALL } from '@/constants/PopupCall'
import cancel from '@/assets/images/cancel.svg'
import answer from '@/assets/images/answer.svg'

interface Props {
  type: 'call to' | 'call away'
  onOK?: () => void
  onCancel?: () => void
}

const Ring: React.FC<Props> = ({ type, onCancel, onOK }) => {
  const [{ typeOfCall: callTo }] = TYPE_OF_CALL

  switch (type) {
    case callTo:
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
