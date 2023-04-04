import styled from "styled-components";
import { Menu } from "antd";

 const MenuCustom = styled(Menu)`
  border-radius: 8px;
  padding: 4px 4px;
  li{&.ant-dropdown-menu-item .ant-dropdown-menu-item-active {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.background.primary};
  }}
`;

export default MenuCustom
