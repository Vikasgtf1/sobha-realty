import "./App.css";
import Home from "./pages/Home";
import Disclaimer from "./pages/Disclaimer";
import ThankYou from "./pages/ThankYou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/grandthum"} element={<Home />} />
          <Route path={"/grandthum/disclaimer"} element={<Disclaimer />} />
          <Route path={"/grandthum/thankyou"} element={<ThankYou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
