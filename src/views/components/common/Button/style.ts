import styled from "styled-components";

import { Button as ButtonCustom } from "antd";

export const Button = styled(ButtonCustom)`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border-radius: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &.primary {
    background: ${({ theme }) => theme.palette.primary.blue[400]};
    color: ${({ theme }) => theme.palette.common.white};
  }
  &.light {
    background: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.common.black};
    border: 1px solid ${({ theme }) => theme.palette.grey.grey[300]};
  }
  &.secondary {
    background: ${({ theme }) => theme.palette.grey.grey[400]};
    color: ${({ theme }) => theme.palette.common.white};
  }
  &.error {
    background: ${({ theme }) => theme.palette.error.main};
    color: ${({ theme }) => theme.palette.common.white};
  }
  &.large {
    min-height: 42px;
  }
  &.medium {
    min-height: 34px;
  }
  &.small {
    min-height: 28px;
  }
  &.large-long {
    min-height: 42px;
    width: 100%;
  }
  &.medium-long {
    min-height: 34px;
    width: 100%;
  }
  &.small-long {
    min-height: 28px;
    width: 100%;
  }
  &.ant-btn[disabled] {
    background: ${({ theme }) => theme.palette.background.disabled};
    color: ${({ theme }) => theme.palette.text.disabled};
  }
`;

export default Button;
