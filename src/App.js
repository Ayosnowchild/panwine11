import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default App;
