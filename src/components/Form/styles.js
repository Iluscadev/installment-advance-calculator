import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10%;

  background-color: var(--purewhite);

  border: none;
  border-radius: 5px 0 0 5px;
`;


export const FormContent = styled.form`
  display: flex;
  flex-direction: column;

  background-color: var(--purewhite);
`;


export const Title = styled.h2`
  white-space: nowrap;

  margin: 5% 10px 10%;

  color: var(--gray5);
  background-color: var(--purewhite);
  font-weight: bold;
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin: 0px 0px 20px;

  font-size: small;
  color: var(--gray5);

  background-color: var(--purewhite);
`;


export const Input = styled.input`
  min-width: 250px;
  height: 35px;
  margin: 5px 0;
  padding: 0 8px;

  color: var(--gray6);
  background-color: var(--purewhite);

  border: 2px solid var(--gray3);
  border-radius: 5px;

  &:focus {
    border: 2px solid var(--lighblue);
    transition: border-color 0.2s ease-in-out;
    outline: none;
  }

  @media (max-width: 550px) {
    min-width: 230px;
  }
`;


export const ButtonSubmit = styled.button`
  width: 100%;
  height: 35px;
  /* padding: 0 8px; */

  background-color: var(--paleblue);
  color: var(--purewhite);

  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
` 

export const Error = styled.span`
  max-width: 250px;

  background-color: var(--purewhite);
  color: var(--gray3);
  font-size: x-small;
  font-weight: 500;
`
