import React from 'react'
import { columns, data } from '@/dataMocks/customer'
import Table from '@/components/common/Table'

const Components = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Components
