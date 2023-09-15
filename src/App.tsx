import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Club } from './pages/Club';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>        
        <Route path='/' element={ <Home/>}/>
        <Route path='/club' element={ <Club/>}/>
        <Route path='/contact' element={ <Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;