import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 800px;
  height: 70%;
  border-radius: 5px;

  @media (max-width: 650px) {
    width: auto;
    flex-direction: column;
  }

  @media (max-height: 650px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 650px) {
    display: block;
  }

  @media (max-height: 350px) {
    display: block;
  }
  
`;


 