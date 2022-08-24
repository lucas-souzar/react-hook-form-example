import { InputHTMLAttributes } from "react";

export type InputProps = {
  label?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
