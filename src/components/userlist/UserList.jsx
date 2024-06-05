

import React from "react";

function UserList({ users, deleteUser }) {
  return (
    <div >
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="border border-white w-[20%] h-[400px]   items-center justify-center text-center text-[20px]" key={user.id}>
              <div className="card-inner">
                <img className="w-[100%]"
                  src={user.image}
                  alt={user.name}
                  width="150"
                  height="150"
                />
                <h3>{user.firstName} {user.lastName}, {user.age} age.</h3>
                <p>From: {user.from}</p>
                <p>Job: {user.job}</p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button> 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;