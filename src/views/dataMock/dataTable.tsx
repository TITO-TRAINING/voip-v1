import React from "react";
import type { ColumnsType } from "antd/lib/table";
import { SortAscendingOutlined } from "@ant-design/icons";
import DropdownCustom from "../components/DropDown";
import items from "../constant/fakeItemPopupAction";
import styled from "styled-components";
import { Menu } from "antd";
// import MenuCustom from "../components/MenuDropdownCustom";

interface IDataTableMock {
  key: string;
  stt: string;
  name: string;
  phone: string;
  staff: string;
  demand: string;
  dateCreate: string;
  createAt: string;
}
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

const dataSource: IDataTableMock[] = [
  {
    key: "1",
    stt: "1",
    name: "nguyr",
    phone: "0987654321",
    staff: "Shark  anh",
    demand: "oke nhe",
    dateCreate: "22/09/2003",
    createAt: "oke",
  },
  {
    key: "7",
    stt: "2",
    name: "nguyễn văn a",
    phone: "0987654321",
    staff: "Shark hung anh",
    demand: "oke nhe",
    dateCreate: "22/09/2003",
    createAt: "oke",
  },
  {
    key: "3",
    stt: "3",
    name: "nguyễn văn a",
    phone: "0987654321",
    staff: "Shark hung anh",
    demand: "oke nhe",
    dateCreate: "22/09/2003",
    createAt: "oke",
  },
  {
    key: "4",
    stt: "2",
    name: "nguyễn văn a",
    phone: "0987654321",
    staff: "Shark hung anh",
    demand: "oke nhe",
    dateCreate: "22/09/2003",
    createAt: "oke",
  },
];

const columns: ColumnsType<object> = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "STT",
  },
  {
    title: (
      <div style={{ display: "flex", alignItems: "center" }}>
        Họ và tên <SortAscendingOutlined style={{ marginLeft: "8px" }} />
      </div>
    ),
    dataIndex: "name",
    key: "fulname",
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phoneNumber",
  },
  {
    title: "Nhân viên phụ trách",
    dataIndex: "staff",
    key: "staff",
  },
  {
    title: "Nhu cầu",
    dataIndex: "demand",
    key: "demand",
  },
  {
    title: "Ngày tạo",
    dataIndex: "dateCreate",
    key: "createDate",
  },
  {
    dataIndex: "createAt",
    key: "hi",
    render: () => {
      return (
        <DropdownCustom overlay={menu} trigger={["click"]}>
          <p>More</p>
        </DropdownCustom>
      );
    },
  },
];

export { dataSource, columns };
