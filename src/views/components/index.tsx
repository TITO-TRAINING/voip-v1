import React from 'react'
import useTranslation from '@/hooks/useTranslation'
import Table from '@/components/common/Table'
import { columns, data } from '@/dataMocks/customer'
import PaginationCustom from '@/components/common/Pagination'

const Components = () => {
  const { t } = useTranslation('table')
  return (
    <div>
      
      <Table dataSource={data} pagination={false}>
        {columns.map((column) => (
          <Table.Column
            key={column.key}
            title={t(`${column.title}`)}
            dataIndex={column.dataIndex}
            width={column.width}
          />
        ))}
      </Table>
      {
        data.length / 10 > 1 && (
          <PaginationCustom total={data.length} pageSize={10}  />
        )
      }
    </div>
  )
}

export default Components
