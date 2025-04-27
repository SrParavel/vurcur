import type React from "react";

type Props = {
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: Props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="text-sm border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-blue-500 focus:ring-2 peer order-2 placeholder:text-gray-300 transition duration-300"
    />
  );
}

export default Input;
