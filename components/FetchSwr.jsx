//TODO:     Fetching API using third library: SWR

import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const FetchSwr = () => {
  
  const { data, isLoading, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="basis-1/3">
      <h2 className="subtitle">fetching API using SWR</h2>

      {data.map(({ id, email }) => (
        <li className="text-sm font-medium list-none m-1" key={id}>
          <p>{email}</p>
        </li>
      ))}
    </div>
  );
};

export default FetchSwr;
