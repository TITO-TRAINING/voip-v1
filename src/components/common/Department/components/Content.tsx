import React, { memo } from 'react'
import { List } from 'antd'
import { IDataCustomer } from '@/types/department'
import { Profile } from '../icons'

interface ContentProps {
  members: IDataCustomer[]
}

const Content: React.FC<ContentProps> = ({ members }) => {
  const listMemberTemp = []

  for (let i = 0; i < 4; i++) {
    if (members[i]) {
      listMemberTemp.push(members[i].name)
    }
  }

  return (
    <>
      <List
        className='department__content'
        size='small'
        dataSource={listMemberTemp}
        renderItem={(item) => (
          <List.Item className='center'>
            <Profile />
            <p className='name--member'>{item}</p>
          </List.Item>
        )}
      />
    </>
  )
}

Content.defaultProps = {}

export default memo(Content)
