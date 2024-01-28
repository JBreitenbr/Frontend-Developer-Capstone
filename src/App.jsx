import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenuList from './components/MenuList';
import Specials from './components/Specials';
import About from './components/About';
import Reservations from './components/Reservations';
import ConfirmedReservation from './components/ConfirmedReservation';
export default function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/Frontend-Developer-Capstone" element={<Home/>}/>
          <Route path="/Frontend-Developer-Capstone/menu" element={<MenuList/>}/>
          <Route path="Frontend-Developer-Capstone/about" element={<About />} />
          <Route path="Frontend-Developer-Capstone/specials" element={<Specials />} />
          <Route path="Frontend-Developer-Capstone/reservations" element={<Reservations />} />
          <Route
            path="Frontend-Developer-Capstone/confirmedReservation"
            element={<ConfirmedReservation />}
          />
        </Routes>
    </Router>
    </>
  )
}
