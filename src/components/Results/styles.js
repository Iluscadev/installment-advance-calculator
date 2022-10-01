import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1.5;

  background-color: var(--gray3);
  border-radius: 0 5px 5px 0;
  border: none;
  font-style: italic;
`;

export const ResultsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 30% 5%;

  background-color: var(--gray3);
`;

export const ResultsTitle = styled.h3`
  margin: 10px;
  padding-bottom: 10px;
  color: var(--paleblue);
  background-color: var(--gray3);
  font-style: italic;
  border-bottom: 1px solid var(--paleblue);
  white-space: nowrap;
`;

export const ResultsText = styled.span`
  margin: 10px;

  color: var(--paleblue);
  background-color: var(--gray3);
  font-weight: 500;

  white-space: nowrap;
`;
