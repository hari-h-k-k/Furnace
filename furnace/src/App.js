import Home from './components/home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home prop="home" />}/>
                    <Route path="/team" element={<Home prop="team" />}/>
                    <Route path="/workflow" element={<Home prop="workflow" />}/>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
