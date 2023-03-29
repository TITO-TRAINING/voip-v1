import styled from "styled-components";

import { Table as TableAntd } from "antd";

const TableCustomer = styled(TableAntd)`
  .ant-table-thead {
    .ant-table-cell {
      color: ${({ theme }) => theme.palette.common.black};
      background-color: ${({ theme }) => theme.palette.common.white};
    }
  }
  .ant-table-tbody {
    tr:nth-child(even) {
      td {
        background-color: ${({theme}) => theme.palette.grey.grey[100]};
      }
    }
  }
  .ant-table-tbody .ant-table-row :hover  {
    background-color: ${({theme }) => theme.palette.background.primary};
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }
  .ant-table-pagination.ant-pagination {
    display: flex;
    margin: 16px auto;
    align-items: center;
    justify-content: center;
  }
  .ant-table-column-sorter {
    display: none;
  }
`;

export default TableCustomer;
