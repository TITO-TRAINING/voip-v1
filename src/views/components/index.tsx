import React from 'react'
import Table from './common/Table'
import { ColumnsType } from 'antd/es/table'
import { data } from '@/dataMocks/customer'

const Components = () => {
  const columns: ColumnsType<object> = [
    {
      key: 'id',
      title: 'STT',
      dataIndex: 'id',
      width: '5%',
    },
    {
      key: 'name',
      title: 'Tên đầy đủ',
      dataIndex: 'name',
      width: '25%',
    },
    {
      key: 'phoneNumber',
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      width: '15%',
    },
    {
      key: 'staff',
      title: 'Nhân viên phụ trách',
      dataIndex: 'staff',
      width: '20%',
    },
    {
      key: 'demand',
      title: 'Nhu cầu',
      dataIndex: 'demand',
      width: '15%',
    },
    {
      key: 'createdAt',
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      width: '15%',
    },
    {
      key: 'nullColums',
      title: '',
      dataIndex: 'nullColums',
      width: '5%',
    },
  ]
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Components
