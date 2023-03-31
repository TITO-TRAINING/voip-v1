import styled from 'styled-components'
import { Table as CustomTable } from 'antd'

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
  }
  tr.ant-table-row:hover > td {
    background-color: ${(props) => props.theme.palette.primary.blue[50]};
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }
`
export default Table
