import styled from 'styled-components'

const RootPageCustom = styled.div`
  .container {
    display: flex;
    background-color: ${({ theme }) => theme.palette.background.paper};
    overflow: hidden;
    width: 100%;

    .sidebar {
      z-index: 50;
    }
  }
`
export default RootPageCustom
