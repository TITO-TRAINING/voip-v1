import React, { memo } from 'react'
import callTo from '@/assets/images/callTo.svg'
import callAway from '@/assets/images/callAway.svg'
import avatarDefault from '@/assets/images/man.svg'

interface Props {
  type: 'call to' | 'call away'
  name: string
  avatar?: string
  phoneNumber: string
}

const Content: React.FC<Props> = ({ type, name, avatar, phoneNumber }) => {
  const call = type === 'call to' ? callTo : callAway

  return (
    <>
      <div className='content__top'>
        <picture className='avatar'>
          <img src={avatar || avatarDefault} alt='' />
        </picture>
        <figure className='call--type'>
          <img src={call} alt='' />
        </figure>
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
