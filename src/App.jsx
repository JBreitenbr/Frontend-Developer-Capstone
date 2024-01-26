/*import './App.css';*/
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import MenuList from './components/MenuList';
export default function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MenuList/>}/>
          <Route path="/menu" element={<MenuList/>}/>
        </Routes>
        </Router>
    </>
  )
}
