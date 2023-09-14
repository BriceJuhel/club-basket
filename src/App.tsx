import './App.css';
import Home from './pages/Home';
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
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;