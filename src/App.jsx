// Components
import {
  FetchData,
  FetchDataAsync,
  FetchHook,
  FetchAxios,
  FetchSwr,
} from "../components";

function App() {
  return (
    <div className="min-h-screen flex-cen">
      <h1 className="title m-2">Vite React Tailwind</h1>

      <div className="flex-cen container mb-4">
        <FetchData />
      </div>
      {/*
        <FetchDataAsync />
        <FetchHook />
        <FetchAxios />
        <FetchSwr />
      */}
      <div className="flex-cen container mb-4">
      </div>
    </div>
  );
}

export default App;
