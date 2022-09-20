import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Features from './pages/Features';
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feature" element={<Features />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
