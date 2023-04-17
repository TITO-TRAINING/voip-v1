import React, { memo, useCallback } from 'react'
import { IDataCustomer } from '@/types/department'
import { List } from 'antd'
import Man from '@/assets/images/man.svg'
import Woman from '@/assets/images/woman.svg'
import { ArrowRight, CallBase } from '../icons'
import Button from '../../Button'

interface FooterProps {
  members: IDataCustomer[]
  onOK: () => void
}

const Footer: React.FC<FooterProps> = ({ members, onOK }) => {
  const listAvatarTemp = []

  for (let i = 0; i < 4; i++) {
    if (members[i]) {
      if (members[i].avatar) {
        listAvatarTemp.push(members[i].avatar)
      } else {
        if (members[i].gender === 'Nam') {
          listAvatarTemp.push(Man)
        } else {
          listAvatarTemp.push(Woman)
        }
      }
    }
  }

  const handleCall = useCallback(() => {
    if (onOK) {
      onOK()
    }
  }, [onOK])

  return (
    <div className='department__footer'>
      <div className='flex flex__center'>
        <div className='department__footer__avatar'>
          <List
            size='small'
            dataSource={listAvatarTemp}
            renderItem={(item) => (
              <List.Item className='flex flex__center avatar'>
                <picture>
                  <img src={item} alt='' />
                </picture>
              </List.Item>
            )}
          />
        </div>
        <div className='department__footer__quantity--member'>
          <span>{members.length} người</span>
          <ArrowRight />
        </div>
      </div>
      <div className='flex flex__bottom'>
        <Button
          className='btn--call'
          children={<CallBase />}
          onClick={handleCall}
        ></Button>
      </div>
    </div>
  )
}

export default memo(Footer)
