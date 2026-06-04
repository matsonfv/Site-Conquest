import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GOWPage from './pages/GOW-Page';
import GOWSobre from './pages/GOW-Sobre';
import './styles/gow.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GOWPage />} />
        <Route path="/sobre" element={<GOWSobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
