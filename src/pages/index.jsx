import Input from "@/components/input";
import Usercard from "@/components/user-card";
import { profiles } from "@/components/data";
import React, { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(profiles);

  const handleChange = (text) => {
    setSearchValue(text);

    const findUser = profiles.filter((value) =>
      value.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <h1 className="text-6xl text-gray-600"> User Find Application</h1>
      <Input handleChange={handleChange} />
      <button
        className="border p-2"
        onClick={() => {
          setUsers(null);
        }}
      >
        Clear
      </button>
      <button
        className="border p-2"
        onClick={() => {
          setUsers(profiles);
        }}
      >
        View
      </button>

      {users?.map(
        ({ firstName, age, email, address, phone, jobTitle, imageUrl }) => {
          return (
            <Usercard
              firstName={firstName}
              age={age}
              email={email}
              address={address}
              phone={phone}
              jobTitle={jobTitle}
              imageUrl={imageUrl}
            />
          );
        }
      )}
      {!users && <p>Empty</p>}
    </main>
  );
}
