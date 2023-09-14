import './App.css';
import Home from './pages/Home';
import { Club } from './pages/Club';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>        
        <Route path='/' element={ <Home/>}/>
        <Route path='/club' element={ <Club/>}/>
      </Routes>
    </div>
  )
}

export default App;