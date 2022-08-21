import { useState } from "react";
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div >
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
      <Route path="/" element={<Home  darkMode={darkMode}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
