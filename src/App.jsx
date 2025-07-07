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
          <Route path={"/remarketing"} element={<Home />} />
          <Route path={"/discovery"} element={<Home />} />
          <Route path={"/branding"} element={<Home />} />
          <Route path={"/demand-gen"} element={<Home />} />
          <Route path={"/disclaimer"} element={<Disclaimer />} />
          {/* <Route path={"/thank-you.html"} element={<ThankYou />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
