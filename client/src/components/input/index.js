import React from "react";

const Input = ({
  label = "",
  name = "",
  type = "text",
  className = "",
  isRequired = false,
  placeholder = "",
  value = '',
  onChange = () =>{},
}) => {
  return (
    <div className={` ${className}`}>
      <label for={name} className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        required={isRequired}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className} `}
        value={value}
        onChange = {onChange}
      />
    </div>
  );
};

export default Input;
