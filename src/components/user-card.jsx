import React from "react";
import { profiles } from "./data";

const Usercard = ({
  firstName,
  age,
  email,
  address,
  phone,
  jobTitle,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col gap-12 w-4/5">
      <div className="w-[100%] flex p-5 gap-8 items-center rounded-2xl bg-green-300">
        <div className="w-16 h-16">
          <img
            className="w-[100%] h-[100%] rounded-full"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="flex gap-4 text-xl">
          <p className="border-2 border-gray-900 rounded-md p-2 flex-1">
            First name: {firstName}
          </p>
          <p className="border-2 border-gray-900 rounded-md p-2 flex-1">
            Age: {age}
          </p>
          <p className="border-2 border-gray-900 rounded-md p-2 flex-1">
            Email: {email}
          </p>
          <p className="border-2 border-gray-900 rounded-md p-2 flex-1">
            Address: {address}
          </p>
          <p className="border-2 border-gray-900 rounded-md p-2 flex-1">
            Phone: {phone}
          </p>
          <p className="border-2 border-gray-900 rounded-md p-2 flex-1">
            Job Title: {jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Usercard;
