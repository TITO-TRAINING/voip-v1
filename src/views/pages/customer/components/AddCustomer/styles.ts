import styled from 'styled-components'

const CustomAddCustomer = styled.div`
  Form {
    margin: 10px 30px;
    .ant-row {
      .ant-col {
        label {
          position: relative;
        }
        .add-camera-customer {
          position: absolute;
          right: 0;
          bottom: 0;
        }
        input {
          padding: 8px 12px;
        }
        #add-avatar-customer {
          display: none;
        }
        .ant-select-selector {
          border-radius: 8px;
          border: none;
          height: 40px;
          padding: 6px 12px;
          background: ${({ theme }) => theme.palette.background.paper};
        }
        TextArea {
          background: ${({ theme }) => theme.palette.background.paper};
          border: none;
        }
        .ant-picker {
          width: 100%;
          padding: 2px 12px;
          border-radius: 6px;
          border: none;
          background: ${({ theme }) => theme.palette.background.paper};
        }
        .ant-picker-input {
          input {
            padding: 8px 0;
          }
        }
      }
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      .cancel {
        background-color: ${({ theme }) => theme.palette.common.white};
        color: ${({ theme }) => theme.palette.common.black};
      }
    }
    hr {
      border: 1px solid ${({ theme }) => theme.palette.background.disabled};
    }
  }
`
export default CustomAddCustomer
