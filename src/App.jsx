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
    <div className="h-screen bg-slate-50 flex-cen">
      <h1 className="title m-2">Vite React Tailwind</h1>

      <div className="flex-cen container mb-4">
        <FetchData />
        <FetchDataAsync />
      </div>
      <div className="flex-cen container mb-4">
        <FetchHook />
        <FetchAxios />
        <FetchSwr />
      </div>
    </div>
  );
}

export default App;
