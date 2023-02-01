// Components
import { useState } from "react";
import {
  Fetch,
  FetchData,
  FetchDataAsync,
  FetchHook,
  FetchAxios,
  FetchAxiosAsync,
  FetchSwr,
} from "../components";

function App() {
  const [option, setOption] = useState(false);
  const [library, setLibrary] = useState(false);

  const chooseOption = () => {
    setOption(!option);
    setLibrary(false);
  };

  const showLibraries = () => {
    setLibrary(!library);
    setOption(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center">
      <h1 className="title m-2">Vite React Tailwind</h1>
      <div className="bg-slate-100 w-screen mt-2 mb-6 flex justify-center">
        <button
          onClick={() => chooseOption()}
          className="px-2 py-1 my-3 mx-2 uppercase hover:bg-slate-400 rounded-lg text-md font-medium"
        >
          fetch
        </button>
        <button
          onClick={() => showLibraries()}
          className="px-2 py-1 my-3 mx-2 uppercase hover:bg-slate-400 rounded-lg text-md font-medium"
        >
          library
        </button>
      </div>

      {option && (
        <div className="flex flex-col md:flex-row gap-4">
          <Fetch />
          <FetchData />
          <FetchDataAsync />
        </div>
      )}

      {library && (
        <div className="flex flex-col md:flex-row gap-4">
          <FetchHook />
          <FetchAxiosAsync />
          <FetchSwr />
        </div>
      )}
    </div>
  );
}

export default App;
