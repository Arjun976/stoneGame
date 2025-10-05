import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Pnf from './pages/Pnf';
import Home from './pages/Home';
import Card from './components/Card';

function App() {
  return (
   
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Pnf />} />
          <Route path="/home" element={<Home />} />
        </Routes>
     
 
  );
}

export default App;