import React from 'react'
import emptyImg from '@/assets/images/Client.svg'
import Empty from './common/Empty'
import { Add, Import } from './icons'
import Button from './common/Button'

const Components = () => {
  const handleImpot = () => {
    console.log('import')
  }
  const handleAddCustomer = () => {
    console.log('add')
  }
  return (
    <div>
      <Empty
        emptyImg={emptyImg}
        content='Quản lý danh sách khách hàng một cách dễ dàng và tiện lợi'
      >
        <Button onClick={handleImpot} className='import'>
          <Import />
          Thêm file từ excel
        </Button>
        <Button onClick={handleAddCustomer} className='add'>
          <Add />
          Thêm khách hàng
        </Button>
      </Empty>
    </div>
  )
}

export default Components
