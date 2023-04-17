import React, { useState } from 'react'
import type { PaginationProps } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Pagination from './style'
import { PaginationType } from '@/types/Pagination' 

const itemRender: PaginationProps['itemRender'] = (
  _,
  type,
  originalElement
) => {
  if (type === 'prev') {
    return (
      <div>
        <ArrowLeftOutlined />
        <a href="/#" className='text--changePage'>Trang trước</a>
      </div>
    )
  }
  if (type === 'next') {
    return (
      <div>
        <a href="/#" className='text--changePage'>Trang tiếp theo</a>
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
      pageSize={pageSize}
    />
  )
}

export default PaginationCustom
