import styled from 'styled-components'
import Modal from 'antd/es/modal/Modal'

const PopupCallCustom = styled(Modal)`
  top: 25px;
  .ant-modal-title {
    display: flex;
    gap: 8px;
    .title {
      margin: 0;
      color: ${({ theme }) => theme.palette.text.body};
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      line-height: 18px;
    }
    .phone {
      color: ${({ theme }) => theme.palette.text.body};
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      line-height: 18px;
    }
  }
  .ant-modal-body {
    margin: 165px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    .content__top {
      display: flex;
      justify-content: center;
      gap: 12px;
      .avatar img {
        width: 80px;
      }
      .call--type {
        margin: 0;
        display: flex;
        img {
          width: 64px;
        }
      }
    }
    .content__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      .phoneNumber {
        margin: 0;
        color: ${({ theme }) => theme.palette.text.body};
        font-style: normal;
        font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        line-height: 20px;
      }
      .name {
        margin: 0;
        color: ${({ theme }) => theme.palette.text.secondary};
        font-style: normal;
        font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        line-height: 18px;
      }
    }
  }
  .ant-modal-footer {
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .footer__button {
      display: flex;
      gap: 90px;
      margin-bottom: 10px;
    }
    button {
      padding: 0;
      background: none;
      border: none;
      margin-top: 18px;
    }
    figure {
      margin: 0;
    }
    .status {
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      line-height: 18px;
      color: ${({ theme }) => theme.palette.text.secondary};
      letter-spacing: -0.1px;
      margin: 8px 0 0 0;
    }
    .time {
      color: ${({ theme }) => theme.palette.text.primary};
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.fontWeightBold};
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
      line-height: 24px;
      margin: 0;
    }
  }
`

export default PopupCallCustom
