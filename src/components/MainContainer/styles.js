import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  
  border-radius: 5px;
  border: 2px solid var(--gray7);

  @media (max-width: 550px) {
    flex-direction: column;
    position: absolute;
    left: 0;
  }
`;
