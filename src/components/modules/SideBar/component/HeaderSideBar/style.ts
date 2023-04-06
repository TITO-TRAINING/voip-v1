import styled from 'styled-components'

const CustomHeaderSidebar = styled.div`
  .logo {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-right: 16px;
  }
  .header-sidebar {
    padding: 0 8px;
    background-color: ${({ theme }) => theme.palette.common.white};

    .sidebar-button-collapsed {
      display: flex;
      justify-content: end;
    }

    .ant-btn {
      border: none;
      padding: 0;
      background-color: unset;
    }

    .icon {
      color: ${({ theme }) => theme.palette.icon.secondary};
    }

    .ant-typography {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.2px;
      color: ${({ theme }) => theme.palette.info.main};
    }

    .logo-image {
      width: 100%;
      width: fit-content;
    }

    .sidebar-logo {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-width: unset;
    }
  }
`

export default CustomHeaderSidebar
