import styled from 'styled-components'
import { Table as CustomTable } from 'antd'
import blue from '@/assets/theme/blue'

const Table = styled(CustomTable)`
  .ant-table-thead {
    .ant-table-cell {
      font-weight: ${(props) => props.theme.typography.fontWeightBold};
      color: ${({ theme }) => theme.palette.common.black};
      background-color: ${({ theme }) => theme.palette.common.white};
    }
  }
  .ant-table-tbody {
    tr:nth-child(even) {
      td {
        background-color: ${(props) => props.theme.palette.grey.grey[100]};
      }
    }
    tr.ant-table-row:hover > td {
      background-color: ${(props) => props.theme.palette.primary.blue[50]};
    }
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }

  &.ant-table-wrapper .ant-table-pagination-right{
    display: flex;
    justify-content: center;
    align-items:center;
  }
  & .ant-pagination-item-active {
    border-radius: 19.41px;
  }
  .ant-pagination .ant-pagination-item:not(.ant-pagination-item-active):hover{
    border-radius: 19.74px;
    background-color:  ${blue[400]};
    color: ${({ theme }) => theme.palette.common.white};

    a{
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`
export default Table
