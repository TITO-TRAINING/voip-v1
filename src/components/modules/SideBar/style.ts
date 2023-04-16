import styled from 'styled-components'

const CustomSidebar = styled.div`
  .sidebar {
    box-shadow: 2px 0px 16px rgba(0, 0, 0, 0.1);
    height: 100vh;
    background-color: ${({ theme }) => theme.palette.common.white};
    width: unset;
    max-width: 220px;
    padding: 16px 12px;
  }

  .menu-sidebar {
    border-right: none;
    margin-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    &::-webkit-scrollbar {
      width: 6px;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 6px;
    }

    .ant-menu-item,
    .ant-menu-submenu-title {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.2px;
      color: ${({ theme }) => theme.palette.text.secondary};
      margin: 12px 0 0 0;
    }

    .ant-menu-item-selected,
    .ant-menu-submenu-selected {
      color: ${({ theme }) => theme.palette.info.main};
      background-color: unset;
    }

    .ant-menu-submenu-selected {
      background-color: ${({ theme }) => theme.palette.common.white};
    }

    .ant-menu-item::after {
      border-right: none;
    }

    .ant-menu-item,
    .ant-menu-submenu {
      .ant-menu-submenu-title {
        padding-right: 0;
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }

    .ant-menu-item-selected {
      svg {
        path {
          stroke: ${({ theme }) => theme.palette.info.main};
        }
      }
      span {
        font-weight: 700;
        color: rgb(16 123 188);
      }
    }

    .ant-menu-item {
      &:hover {
        svg {
          path {
            stroke: ${({ theme }) => theme.palette.info.main};
          }
        }
        span {
          font-weight: 700;
          color: rgb(16 123 188);
        }
      }
    }

    .ant-menu-submenu-selected {
      &:hover {
        font-weight: 700;
        color: rgb(16 123 188);
        svg {
          path {
            stroke: ${({ theme }) => theme.palette.info.main}c;
          }
        }
      }
    }

    .ant-menu-title-content {
      &:hover {
        font-weight: 700;
        color: rgb(16 123 188);
      }
    }

    .ant-menu-submenu-selected {
      font-weight: 700;
      color: rgb(16 123 188);
    }

    .ant-menu-title-content {
      margin-left: 12px;
    }

    .ant-menu-item-only-child {
      margin: 0;
    }
  }
`

export default CustomSidebar
