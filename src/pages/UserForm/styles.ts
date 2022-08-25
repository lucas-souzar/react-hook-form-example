import styled from "styled-components";

export const FormContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ErrorMessage = styled.span`
  padding-left: 0.5rem;
  color: #fd5977;
  font-size: 10px;
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
