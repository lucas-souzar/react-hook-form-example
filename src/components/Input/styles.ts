import styled from "styled-components";

interface InputContainerProps {
  width?: string;
  error?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ width }) => (width ? width : "100%")};
  position: relative;

  .input-text {
    padding: 0.8rem;
    width: 100%;
    height: 100%;
    border: solid 2px
      ${({ error }) => (error ? "#fd5977" : "rgba(0, 0, 0, 0.12)")};
    background-color: ${({ error }) => (error ? "#fff2f5" : "#ffffff")};
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    color: #000000de;
    transition: all 0.2s;

    &:focus {
      border: solid 2px ${({ error }) => (error ? "#fd5977" : "#576aca")};
    }

    &::placeholder {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: all 0.2s;
    }

    &:focus::placeholder {
      opacity: 1;
    }
  }

  .label {
    position: absolute;
    left: 10px;
    top: 12px;
    padding: 0 2px;
    z-index: 1;
    color: ${({ error }) => (error ? "#fd5977" : "rgba(0, 0, 0, 0.6)")};
    transition: all 0.2s;

    &::before {
      content: "";
      height: 5px;
      background-color: ${({ error }) => (error ? "#fff2f5" : "#ffffff")};
      position: absolute;
      left: 0;
      top: 10px;
      width: 100%;
      z-index: -1;
    }
  }

  .input-text:focus + .label,
  .filled {
    top: -10px;
    color: ${({ error }) => (error ? "#fd5977" : "#576aca")};
    font-size: 12px;
  }
`;
