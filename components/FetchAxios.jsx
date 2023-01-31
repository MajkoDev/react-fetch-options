//TODO:     Fetching API using third library: Axios

import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="basis-1/3">
      <h2 className="subtitle">fetching API using Axios</h2>
      {users.map((user) => (
        <li key={user.id} className="text-sm list-none m-1">
          {user.username}
        </li>
      ))}
    </div>
  );
};

export default FetchAxios;
