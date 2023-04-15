import React, { memo } from 'react'
import { Active, DeActive, MoreCircle } from '../icons'
import { STATE_DEPARTMENT } from '@/constants/department'

interface HeaderProps {
  state: string
  name: string
  createAt: string
}

const Header: React.FC<HeaderProps> = ({ state, name, createAt }) => {
  return (
    <div className='department__header'>
      <div className='department__header--top'>
        {state === STATE_DEPARTMENT.active && (
          <div className='state flex flex__center'>
            <Active />
            <span>Đang họp</span>
          </div>
        )}
        {state === STATE_DEPARTMENT.deActive && (
          <div className='state flex flex__center'>
            <DeActive />
            <span>Không trực tuyến</span>
          </div>
        )}
        <div className='more-circle flex flex__center'>
          <MoreCircle />
        </div>
      </div>
      <div className='department__header--bottom'>
        <p className='department--name'>{name}</p>
        <p className='createAt'>Đã tạo vào {createAt}</p>
      </div>
    </div>
  )
}

export default memo(Header)
