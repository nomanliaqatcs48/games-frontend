import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Features from './pages/Features';
import LandingPage from "./pages/LandingPage";
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
