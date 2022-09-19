import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp';

import './App.css';


function App() {
  return (
    <div className="App">
     <h1>InvoChat</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
