import Label from "@src/components/atoms/label/label";
import React, { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "email" | "password";
  value: string;
  label: string;
  placeholder: string;
  whenChange: (value: string) => void;
}

const input = (props: InputProps) => {
  const { type, value, label, placeholder, whenChange } = props;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    whenChange(event.target.value);

  return (
    <label className="block w-full">
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        onChange={changeHandler}
      />
    </label>
  );
};

export default input;
