import styled from 'styled-components'

import { Input as InputCustom } from 'antd'

export const Input = styled(InputCustom)`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.palette.text.tertiary};
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.palette.background.paper};
  transition: all 0.2s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[5]};
  }
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows[6]};
    border: none;
  }
  &:focus-visible {
    outline: none;
  }
  &:focus-within {
    box-shadow: ${({ theme }) => theme.shadows[6]};
  }
  .ant-input {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
  &.ant-input-affix-wrapper-disabled {
    &:hover {
      box-shadow: unset;
    }
    .icon-search > path {
      fill: ${({ theme }) => theme.palette.text.disabled};
    }
  }
  &.ant-input-affix-wrapper {
    color: ${({ theme }) => theme.palette.info.main};
  }
  .ant-input-clear-icon {
    font-size: 0px;
  }
  &.large {
    padding: 12px 12px;
  }
  &.small {
    padding: 8px 12px;
  }
`
export default Input
