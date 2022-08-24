import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  background: #576aca;
  color: #ffffff;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background 0.4s;

  &:hover {
    background: #576acacf;
  }
`;
