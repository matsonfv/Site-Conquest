import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CPPage from './pages/CP-Page';
import CPSobre from './pages/CP-Sobre';
import './styles/cyberpunk.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CPPage />} />
        <Route path="/sobre" element={<CPSobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;