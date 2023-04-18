import React, { useState } from 'react'
import type { PaginationProps } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Pagination from './style'
import { PaginationType } from '@/types/Pagination' 

 export const itemRender: PaginationProps['itemRender'] = (
  _,
  type,
  originalElement
) => {
  if (type === 'prev') {
    return (
      <div>
        <ArrowLeftOutlined />
        <span style={{color:'black'}} className='text--changePage'>Trang trước</span>
      </div>
    )
  }
  if (type === 'next') {
    return (
      <div>
        <span style={{color:'black'}} className='text--changePage'>Trang tiếp theo</span>
        <ArrowRightOutlined />
      </div>
    )
  }
  return originalElement
}



const PaginationCustom: React.FC<PaginationType> = ({ total, pageSize }) => {
  const [pageNumber, setPageNumber] = useState(1)

  const onChange = (pageNumber: number) => {
    setPageNumber(pageNumber)
    console.log(pageNumber)
  }

  return (
    <Pagination
      current={pageNumber}
      total={total}
      onChange={onChange}
      itemRender={itemRender}
      // pageSize={pageSize}
    />
  )
}

export default PaginationCustom
