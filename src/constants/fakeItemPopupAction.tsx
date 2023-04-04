import { MenuProps } from "antd";
import React from "react";
import MenuItem from "@/components/common/MenuItem";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <MenuItem
        iconName="seePass"
        title="Xem chi tiết"
      />
    ),
  },
  {
    key: "2",
    type: "divider",
  },
  {
    key: "3",
    label: (
      <MenuItem  iconName="ticket" title="Tạo phiếu ghi" />
    ),
  },
  {
    key: "4",
    label: (
      <MenuItem
        iconName="notes"
        title="Thêm ghi chú"
      />
    ),
  },
  {
    key: "5",
    type: "divider",
  },
  {
    key: "6",
    label: <MenuItem  iconName="call" title="Gọi" />,
  },
  {
    key: "7",
    label: (
      <MenuItem  iconName="message" title="Gửi tin nhắn" />
    ),
  },
  {
    key: "8",
    label: (
      <MenuItem
        iconName="mail"
        title="Gứi email"
      />
    ),
  },
  {
    key: "9",
    type: "divider",
  },
  {
    key: "10",
    label: (
      <MenuItem
        className="delete"
        iconName="delete"
        title="Xóa khách hàng"
      />
    ),
  },
];

export default items;
