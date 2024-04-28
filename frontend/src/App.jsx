import { useState } from "react";
import "./App.css";
import Home from "./components/Add";
import Find from "./components/Find";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  NavLink,
} from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Find />} />
          {/* <Route exact path="/find" element={<Find />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
