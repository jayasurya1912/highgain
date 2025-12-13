import Home from "./componds/home";
import About from "./componds/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./componds/marketingpartners";
import Why from "./componds/whycollaborating";
import Contact from "./componds/contact";
import Azizi from "./componds/azizi";
import Acube from "./componds/acube";
import Binghatti from "./componds/binghatti";
import Damac from "./componds/damac";
import Object from "./componds/object";
import Emmar from "./componds/emmar";
import Ellignton from "./componds/ellignton";
import Samana from "./componds/samana";
import Sobha from "./componds/sobha";

function App() {
  return (
    <>
      <BrowserRouter basename="/highgain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/marketingpartner" element={<Market />} />
          <Route path="/azizi" element={<Azizi />} />
          <Route path="/acube" element={<Acube />} />
          <Route path="/binghatti" element={<Binghatti />} />
          <Route path="/object" element={<Object />} />
          <Route path="/damac" element={<Damac />} />
          <Route path="/emmar" element={<Emmar />} />
          <Route path="/ellignton" element={<Ellignton />} />
          <Route path="/samana" element={<Samana />} />
          <Route path="/sobha" element={<Sobha />} />
          <Route path="/whycollaborating" element={<Why />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
