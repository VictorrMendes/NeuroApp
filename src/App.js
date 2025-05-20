import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Artigo from './pages/artigo';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Artigo' element={<Artigo/>} />
      </Routes>
    
    </Router>
  );
}

export default App;
