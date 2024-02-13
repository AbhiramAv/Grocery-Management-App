import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pt-24 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
