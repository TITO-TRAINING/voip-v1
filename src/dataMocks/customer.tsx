//type
import { Table } from '@/constants/Customer'
import { ICustomer } from '@/types/Customer'
import { ColumnsType } from 'antd/es/table'
import { SortAscendingOutlined } from "@ant-design/icons";
import DropdownCustom from '@/components/common/DropDown';
import styled from 'styled-components';
import { Menu } from 'antd';
import items from '@/constants/fakeItemPopupAction';


export const MenuCustom = styled(Menu)`
 &.ant-dropdown-menu{
  border-radius: 8px;
  padding: 4px 4px;
  min-width: 280px;
 }
 &.ant-dropdown-menu .ant-dropdown-menu-item:hover{
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.background.primary};
}
`;

const menu = <MenuCustom items={items} />;
export const columns: ColumnsType<object> = [
  {
    key: 'id',
    title: Table.stt,
    dataIndex: 'id',
    width: '5%',
  },
  {
    key: 'name',
    title: (
      <div style={{ display: "flex", alignItems: "center" }}>
        {Table.name} <SortAscendingOutlined style={{ marginLeft: "8px" }} />
      </div>
    ),
    dataIndex: 'name',
    width: '25%',
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    key: 'phoneNumber',
    title: Table.phoneNumber,
    dataIndex: 'phoneNumber',
    width: '15%',
  },
  {
    key: 'staff',
    title: Table.staff,
    dataIndex: 'staff',
    width: '20%',
  },
  {
    key: 'demand',
    title: Table.demand,
    dataIndex: 'demand',
    width: '15%',
  },
  {
    key: 'createdAt',
    title: Table.createdAt,
    dataIndex: 'createdAt',
    width: '15%',
  },
  {
    key: 'nullColums',
    title: '',
    dataIndex: 'nullColums',
    width: '5%',
    render: () => {
      return (
        <DropdownCustom overlay={menu} trigger={["click"]}>
          <p>More</p>
        </DropdownCustom>
      );
    },
  },
]
export const data: ICustomer[] = [
  {
    id: 1,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 2,
    name: 'Nguyễn Văn thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 3,
    name: 'Nguyễn Thị Nga',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 4,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 5,
    name: 'Phạm Thị Hiền',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 6,
    name: 'Phạm Thị Hiền',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 7,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 8,
    name: 'Phạm Thị Hiền',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 9,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 10,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
]
