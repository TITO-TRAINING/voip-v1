import React from 'react'
import useTranslation from '@/hooks/useTranslation'
import Table from '@/components/common/Table'
import { columns, data } from '@/dataMocks/customer'

const Components = () => {
  const { t } = useTranslation('table')

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
