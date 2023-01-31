//TODO:     Fetching API using custom hook: react-fetch-hook

import React from "react";
import useFetch from "react-fetch-hook";

const FetchHook = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="basis-1/3">
      <h2 className="subtitle">fetching API using custom hook</h2>
      {isLoading && <h2>Wait a minute...</h2>}
      {error && <h3>There is a problem somewhere!</h3>}
      {data &&
        data.map(({ id, name }) => (
          <p className="text-sm italic" key={id}>
            <h3>{name}</h3>
          </p>
        ))}
    </div>
  );
};

export default FetchHook;
