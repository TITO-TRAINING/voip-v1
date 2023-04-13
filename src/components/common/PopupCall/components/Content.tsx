import React, { memo } from 'react'
import callTo from '@/assets/images/callTo.svg'
import callAway from '@/assets/images/callAway.svg'
import avatarDefault from '@/assets/images/man.svg'
import { DATA_TYPE_OF_CALL } from '@/constants/popupCall'

interface Props {
  type: 'call to' | 'call away'
  name: string
  avatar?: string
  phoneNumber: string
}

const Content: React.FC<Props> = ({ type, name, avatar, phoneNumber }) => {
  const call = type === DATA_TYPE_OF_CALL.callTo ? callTo : callAway

  return (
    <>
      <div className='content__top'>
        <picture className='avatar'>
          <img src={avatar} alt='' />
        </picture>
        <picture className='call--type'>
          <img src={call} alt='' />
        </picture>
      </div>
      <div className='content__info'>
        <p className='phoneNumber'>{phoneNumber}</p>
        <p className='name'>{name}</p>
      </div>
    </>
  )
}

Content.defaultProps = {
  avatar: avatarDefault,
}

export default memo(Content)
