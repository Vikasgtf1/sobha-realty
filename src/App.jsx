import "./App.css";
import Home from "./pages/Home";
import Disclaimer from "./pages/Disclaimer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/grandthum"} element={<Home />} />
          <Route path={"/disclaimer"} element={<Disclaimer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
