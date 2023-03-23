import styled from 'styled-components'

const empty = styled.div`
  .empty {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.common.white};
    border-radius: 16px;
  }
  img {
    width: 100%;
    object-fit: cover;
    color: ${({ theme }) => theme.palette.common.white};
  }
  .empty__right {
    padding: 24px;
    max-width: 60%;
  }
  .buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    .import {
      background-color: ${({ theme }) => theme.palette.common.white};
      color: ${(props) => props.theme.palette.primary.blue[400]};
      border: 1px solid ${(props) => props.theme.palette.primary.blue[400]};
      font-size: 14px;
      min-height: 34px;
    }
    .add {
      font-size: 14px;
      min-height: 34px;
    }
  }
  .empty__right--title {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: 400;
    font-size: 16px;
    max-width: 70%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 24px;
  }
`
export default empty
