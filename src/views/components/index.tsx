import React from 'react'
import emptyImg from '@/assets/icons/Client.svg'
import Empty from './common/Empty'
import { ReactComponent as AddCustomer } from '@/assets/icons/AddCustomer.svg'
import { ReactComponent as FileImport } from '@/assets/icons/FileImport.svg'
import Button from './common/Button'

const Components = () => {
  const handleImport = () => {
    //TODO: Implement handle Import excel button
    console.log('import')
  }
  const handleAddCustomer = () => {
    //TODO: Implement handle addCustomer button
    console.log('add')
  }
  return (
    <div>
      <Empty
        emptyImg={emptyImg}
        content='Quản lý danh sách khách hàng một cách dễ dàng và tiện lợi'
      >
        <Button onClick={handleImport} className='import'>
          <FileImport />
          Thêm file từ excel
        </Button>
        <Button onClick={handleAddCustomer} className='add'>
          <AddCustomer />
          Thêm khách hàng
        </Button>
      </Empty>
    </div>
  )
}

export default Components
