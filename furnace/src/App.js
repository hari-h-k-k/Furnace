import Home from './components/home/Home';
import { BrowserRouter ,Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Workflow from "./components/workflow/Workflow";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workflow" element={<Workflow />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
