//TODO:     Pure fetch() method

import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="basis-1/3">
      <h2 className="subtitle">Pure Fetch() Method</h2>
      {users.map((user) => (
        <li key={user.id} className="text-sm list-none m-1">
          {user.username}
        </li>
      ))}
    </div>
  );
};

export default Fetch;
