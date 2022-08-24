import { useEffect } from "react";

import { InputContainer } from "./styles";
import { InputProps } from "./types";

export function Input({ label, id, required, ...rest }: InputProps) {
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
    <InputContainer>
      <input
        className="input-text"
        id={id}
        {...rest}
        required={required}
        autoComplete="off"
      />
      <label className="label" htmlFor={id}>
        {`${label} ${required ? "*" : ""}`}
      </label>
    </InputContainer>
  );
}
