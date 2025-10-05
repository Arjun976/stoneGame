import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pnf from './pages/Pnf';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
      
        
        <Routes>
          
          <Route path="*" element={<Pnf />} />
          <Route path="/" element={<Home />} />
        </Routes>
     
 
  );
}

export default App;