import { forwardRef, useEffect } from "react";

import { InputContainer } from "./styles";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...rest }, ref) => {
    useEffect(() => {
      document.querySelectorAll(".input-text").forEach((element) => {
        element.addEventListener("blur", (event: any) => {
          if (event.target.value !== "") {
            event.target.nextElementSibling.classList.add("filled");
          } else {
            event.target.nextElementSibling.classList.remove("filled");
          }
        });
      });
    }, []);

    return (
      <InputContainer error={error}>
        <input
          ref={ref}
          className={`input-text`}
          id={id}
          autoComplete="off"
          {...rest}
        />
        <label className="label" htmlFor={id}>
          {label}
        </label>
      </InputContainer>
    );
  }
);

export default Input;
