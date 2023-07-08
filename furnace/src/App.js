import Home from './components/home/Home';
import Team from './components/team/Team';
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Background from "./components/background/Background";
import { BrowserRouter, Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </>

  );
}

export default App;
