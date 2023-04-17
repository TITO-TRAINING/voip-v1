import styled from 'styled-components'
import { Pagination as PaginationCustom } from 'antd'
import blue from '@/assets/theme/blue'

const Pagination = styled(PaginationCustom)`
  &.ant-pagination {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 11px;

    a {
      color: ${({ theme }) => theme.palette.common.black};
      margin: 0px 4px;
    }
  }

  &.ant-pagination .ant-pagination-item-active {
    border-radius: 19.74px;
  }

  &.ant-pagination .ant-pagination-item:hover {
    border-radius: 19.74px;
    background-color:  ${blue[400]};
    color: ${({ theme }) => theme.palette.common.white};
  }

  &.ant-pagination .ant-pagination-item-active:hover {
    border-radius: 19.74px;
    background-color:  ${blue[400]};
    color: ${({ theme }) => theme.palette.common.white};
  }
`
export default Pagination
