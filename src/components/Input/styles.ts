import styled from "styled-components";

export const InputContainer = styled.div`
  width: 250px;
  position: relative;

  .input-text {
    padding: 0.8rem;
    width: 100%;
    height: 100%;
    border: solid 2px rgba(0, 0, 0, 0.12);
    background-color: #ffffff;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    color: #000000de;
    transition: all 0.2s;

    &:focus {
      border: solid 2px #576aca;
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
    color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s;

    &::before {
      content: "";
      height: 5px;
      background-color: #ffffff;
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
    color: #576aca;
    font-size: 12px;
  }
`;
