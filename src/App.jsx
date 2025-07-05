import "./App.css";
import Home from "./pages/Home";
import Disclaimer from "./pages/Disclaimer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/one-fng"} element={<Home />} />
          <Route path={"/one-fng/disclaimer"} element={<Disclaimer />} />
          <Route path={"/one-fng/thank-you"} element={<ThankYou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
