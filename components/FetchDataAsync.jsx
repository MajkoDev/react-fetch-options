//TODO:     Fetching API using fetch() method and async/await

import React, { useEffect, useState } from "react";

const FetchDataAsync = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let receiveData = await res.json();
        setUsers(receiveData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="basis-1/3">
      <h2 className="subtitle">
        Fetching API using fetch() method and async/await syntax
      </h2>
      {users.map((user) => (
        <li key={user.id} className="text-sm list-none m-1">
          {user.email}
        </li>
      ))}
    </div>
  );
};

export default FetchDataAsync;
