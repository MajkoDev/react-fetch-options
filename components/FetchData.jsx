//TODO:     Fetching API using fetch() method

import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="basis-1/3">
      <h2 className="subtitle">Fetching API using fetch()</h2>
      {users.map((user) => (
        <li key={user.id} className="text-sm list-none m-1">
          {user.name}
        </li>
      ))}
    </div>
  );
};

export default FetchData;
