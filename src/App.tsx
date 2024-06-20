import { useEffect, useState } from "react";
import Navbar from "./components/narvbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus";
import Launches from "./pages/launches";
import Rockets from "./pages/rockets";
import RocketInfo from "./pages/rockets/components/rocketInfo";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/info/:id" element={<RocketInfo />} />
      </Routes>
    </div>
  );
}

export default App;
