/*import './App.css';*/
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenuList from './components/MenuList';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/Frontend-Developer-Capstone" element={<Home/>}/>
          <Route path="/Frontend-Developer-Capstone/menu" element={<MenuList/>}/>
        </Routes>
    </Router>
    </>
  )
}
