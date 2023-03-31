import React from 'react'
import Table from '@/components/common/Table'
import { columns, data } from '@/dataMocks/customer'
import { useTranslation } from 'react-i18next'

const Components = () => {
  const { t } = useTranslation('customer')

  return (
    <div>
      <Table dataSource={data}>
        {columns.map((column) => (
          <Table.Column
            key={column.key}
            title={t(`${column.title}`)}
            dataIndex={column.dataIndex}
            width={column.width}
          />
        ))}
      </Table>
    </div>
  )
}

export default Components
