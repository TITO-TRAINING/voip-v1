import styled from 'styled-components'
import { Card as CardCustom } from 'antd'
import theme from '@/assets/theme'

const Card = styled(CardCustom)`
  max-width: 280px;
  &:hover {
    box-shadow: ${theme.shadows[0]};
  }
  .ant-card-body {
    min-height: 330px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    .department__header {
      &--top {
        display: flex;
        justify-content: space-between;
        .state {
          display: flex;
          gap: 16px;
          span {
            font-weight: ${theme.typography.fontWeightRegular};
            font-size: ${theme.typography.fontSize.xs};
            color: ${theme.palette.text.body};
            flex: none;
            order: 1;
            flex-grow: 0;
          }
        }
      }
      &--bottom {
        p {
          margin: 8px 0 0 0;
        }
      }
      .department--name {
        font-weight: ${theme.typography.fontWeightSemiBold};
        font-size: ${theme.typography.fontSize.base};
        letter-spacing: -0.2px;
        color: ${theme.palette.text.primary};
      }
      .createAt {
        font-style: normal;
        font-weight: ${theme.typography.fontWeightRegular};
        font-size: ${theme.typography.fontSize.sm};
        letter-spacing: -0.1px;
        color: ${theme.palette.icon.secondary};
      }
    }
    .department__content {
      margin: 20px 0;
      flex: 1;
      .name--member {
        font-style: normal;
        font-weight: ${theme.typography.fontWeightRegular};
        font-size: ${theme.typography.fontSize.sm};
        letter-spacing: -0.1px;
        color: ${theme.palette.text.body};
      }
    }
    .department__footer {
      &__avatar {
        min-width: max-content;
      }
      display: flex;
      justify-content: space-between;
      .ant-list-item:nth-child(2) {
        transform: translateX(-30%);
      }
      .ant-list-item:nth-child(3) {
        transform: translateX(-60%);
      }
      .ant-list-item:nth-child(4) {
        transform: translateX(-90%);
      }
      .flex__center {
        flex-wrap: wrap;
        row-gap: 8px;
      }
      .avatar {
        display: inline-block;
        width: 28px;
        padding: 0;
        img {
          width: 100%;
          border: 1px solid ${theme.palette.background.default};
          border-radius: 50%;
          /* transform: translateX(n*(-30%)); */
        }
      }
      .department__footer__quantity--member {
        span {
          margin-right: 10px;
          font-style: normal;
          font-weight: ${theme.typography.fontWeightRegular};
          font-size: ${theme.typography.fontSize.sm};
          letter-spacing: -0.1px;
          color: ${theme.palette.text.body};
        }
      }
      .btn--call {
        padding: 0;
        background: none;
        bottom: 0;
      }
    }
  }
  .ant-list-item {
    padding: 4px 0;
    border: none;
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    .name--member {
      margin: 0;
    }
  }
  .flex {
    display: flex;
  }
  .flex__bottom {
    align-items: flex-end;
  }
  .flex__center {
    align-items: center;
  }
`

export default Card
