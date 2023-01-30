// Components
import { useState } from "react";
import {
  FetchData,
  FetchDataAsync,
  FetchHook,
  FetchAxios,
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
        <>
          <FetchData />
          <FetchDataAsync />
        </>
      )}

      {library && (
        <>
          <FetchHook />
          <FetchAxios />
          <FetchSwr />
        </>
      )}

    </div>
  );
}

export default App;
