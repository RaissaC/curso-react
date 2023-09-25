import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css'
import Home from './components/Home';
import Informacoes from './components/Informacoes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informacoes" element={<Informacoes />} />
        </Routes>
      </BrowserRouter>
    </div>
)
}

export default App;
