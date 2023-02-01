//TODO:     Fetching API using third library: Axios (with asynch-await syntax)

import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAxiosAsync = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios
          .get(`https://jsonplaceholder.typicode.com/users`)
          .then((res) => {
            setUsers(res.data);
          });
      } catch (err) {
        console.log("There has been error somewhere.");
      }
    };
    getData();
  }, []);

  return (
    <div className="basis-1/3">
      <h2 className="subtitle">
        fetching API using Axios (asynch-await syntax)
      </h2>
      {users.map((user) => (
        <li key={user.id} className="text-sm list-none m-1">
          {user.username}
        </li>
      ))}
    </div>
  );
};

export default FetchAxiosAsync;
