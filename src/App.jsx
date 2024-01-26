/*import './App.css';*/
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenuList from './components/MenuList';
export default function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<MenuList/>}/>
        </Routes>
        </Router>
    </>
  )
}
