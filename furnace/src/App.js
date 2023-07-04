import Home from './components/home/Home';
import { BrowserRouter ,Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
function App() {
    return (

        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/venues" element={<div>Venues page</div>} />
                    <Route path="/events" element={<div>Events page</div>} />
                    <Route path="/accessories" element={<div>Accessories page</div>}/>
                    <Route path="/profile" element={<PrivateRoute component={ProfileIndex}/>}/>
                    <Route path="/turfDetails" element={<PrivateRoute component={TurfDetails}/>}/>
                    <Route path="/turfBooking" element={<PrivateRoute component={TurfBooking}/>}/>
                    <Route path="/showOnMap" element={<PrivateRoute component={BasicMap} />}/> */}
                </Routes>
            </BrowserRouter>

    );
}

export default App;
