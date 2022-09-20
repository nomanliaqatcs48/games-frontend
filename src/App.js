import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Features from './pages/Features';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Features />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
