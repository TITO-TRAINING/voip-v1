import styled from 'styled-components'

const RootPageCustom = styled.div`
  .container {
    display: flex;
    background-color: ${({ theme }) => theme.palette.background.paper};
    overflow: hidden;
    width: 100%;
    height: 100vh;
    .sidebar {
      flex: 0 0 auto;
      z-index: 50;
    }
    .content {
      flex: 1;
      height: 100%;
    }
  }
`
export default RootPageCustom
