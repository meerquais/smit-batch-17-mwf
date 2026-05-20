import React from "react";

function UserCard({ user }) {
  console.log("test");
  console.log(user);
  return (
    <div className="border p-4 rounded mb-3">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </div>
  );
}

export default UserCard;
