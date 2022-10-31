import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Diary from './pages/diary/Diary';
import My from "./pages/my/My";
import ZeroWaste from "./pages/share/ZeroWaste";
// import CarbonFootprint from "./pages/share/CarbonFootprint";
// import Food from "./pages/share/Food";
// import Others from "./pages/share/Others";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/diary" element={<Diary/>} />
        <Route path="/zerowaste" element={<ZeroWaste/>} />
        {/* <Route path="/carbonfootprint" element={<CarbonFootprint/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/others" element={<Others/>} /> */}
        <Route path="/my" element={<My/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
