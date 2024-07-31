import React from "react";
import { profiles } from "./data";
import Usercard from "./user-card";

const Input = ({ handleChange }) => {
  const changeValue = (e) => {
    handleChange(e.target.value);
  };
  return (
    <div className="flex flex-col gap-8">
      <input
        className="border-gray-500 border-2 rounded-xl p-4"
        type="text"
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
