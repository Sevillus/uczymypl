"use client";
import React, { useState } from "react";

const NewAccount = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [target, setTarget] = useState();

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const makeApiCall = async (e) => {
    e.preventDefault();

    await fetch("/api/add-user", {
      method: "POST",
      body: JSON.stringify({ role: selectedRole, target: target }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <h1>Dokończ rejestrację</h1>
      <form onSubmit={() =>makeApiCall}>
        <label>
          <input
            type="radio"
            value="student"
            checked={selectedRole === "student"}
            onChange={handleRoleChange}
          />
          Student
        </label>
        <label>
          <input
            type="radio"
            value="teacher"
            checked={selectedRole === "dashboard"}
            onChange={handleRoleChange}
          />
          Teacher
        </label>
        <button type="submit">Submit</button>
        {selectedRole === "dashboard" && (
          <div>
            <p>Podaj swój target</p>
            <input
              className={"border-2 "}
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              min="0"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default NewAccount;
