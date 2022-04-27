import React from "react";
import UserCard from "./UserCard";
import "../App.css";
const UserList = ({ userlist }) => {
  return (
    <div>
      <h1>User List</h1>
      <div className="list">
        {userlist.map((el) => (
          <UserCard Users={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
