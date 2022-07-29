import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/music-management" element={<Home/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

