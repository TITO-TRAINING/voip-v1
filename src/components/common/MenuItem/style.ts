import styled from "styled-components";

export const MenuItem = styled.div`
  display: flex;
  padding: 4px 2px;
  align-items: center;
  p {
    margin: 0 0 0 12px;
    height: 100%;
    &.delete{
      color: red;
    }
  }
  
`;
export const IconMenu = styled.div`
  padding: 0 10px;
  display: flex;
  align-item: space-around;
`;
