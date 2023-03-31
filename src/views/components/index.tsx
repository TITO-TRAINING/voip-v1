import React from 'react'
import Table from '@/components/common/Table'
import { data } from '@/dataMocks/customer'
import { useTranslation } from 'react-i18next'
import { ColumnsType } from 'antd/es/table'

const Components = () => {
  const { t } = useTranslation('customer')
  const columns: ColumnsType<object> = [
    {
      key: 'id',
      title: t('table.stt'),
      dataIndex: 'id',
      width: '5%',
    },
    {
      key: 'name',
      title: t('table.name'),
      dataIndex: 'name',
      width: '25%',
    },
    {
      key: 'phoneNumber',
      title: t('table.phoneNumber'),
      dataIndex: 'phoneNumber',
      width: '15%',
    },
    {
      key: 'staff',
      title: t('table.employeeSupport'),
      dataIndex: 'staff',
      width: '20%',
    },
    {
      key: 'demand',
      title: t('table.demand'),
      dataIndex: 'demand',
      width: '15%',
    },
    {
      key: 'createdAt',
      title: t('table.createdAt'),
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
