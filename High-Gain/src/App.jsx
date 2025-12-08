import Home from "./componds/home";
import About from "./componds/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./componds/marketingpartners";
import Why from "./componds/whycollaborating";
import Contact from "./componds/contact";

function App() {
  return (
    <>
      <BrowserRouter basename="/highgain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/marketingpartner" element={<Market />} />
          <Route path="/whycollaborating" element={<Why />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
