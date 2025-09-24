import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/WhyChoose";
import WhyChoose from "./components/WhyChoose";
// import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/pricing" element={<WhyChoose />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
