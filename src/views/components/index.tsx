import React from 'react'
import TableCustomer from './Table'
import { dataSource, columns } from '../dataMock/dataTable'
const Components = () => {
  return (
    <>
      <TableCustomer dataSource={dataSource} columns={columns}></TableCustomer>
    </>
  )
}

export default Components
