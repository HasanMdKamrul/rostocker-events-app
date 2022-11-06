import { RouterProvider } from "react-router-dom";
import router from "./Router/Router/Router";

function App() {
  return (
    <div className="dark:bg-slate-900 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
