import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Features from './pages/Features';
import LandingPage from "./pages/LandingPage";

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        <Route path="/feature" element={<Features />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
