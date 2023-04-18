import styled from 'styled-components'
import { Pagination as PaginationCustom } from 'antd'
import blue from '@/assets/theme/blue'

const Pagination = styled(PaginationCustom)`
  &.ant-pagination {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 11px;
  }
  &.ant-pagination a:hover {
    color: ${({ theme }) => theme.palette.common.white};
    border-radius:19.74px
  }

  &.ant-pagination .text--changePage{
    margin: 0px 4px;
    color: ${({ theme }) => theme.palette.common.black};
  }
  &.ant-pagination .text--changePage:hover{
    margin: 0px 4px;
    color: ${({ theme }) => theme.palette.common.black};
  }

  &.ant-pagination .ant-pagination-item-active {
    border-radius: 19.74px;
  }

  &.ant-pagination .ant-pagination-item:not(.ant-pagination-item-active):hover {
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
