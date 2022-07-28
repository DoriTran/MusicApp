import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/music" element={<Home/>} />
        <Route path="/play/id=:musicID" element={<Home/>} />
        <Route path="/add" element={<Home/>} />
        <Route path="/edit/id=:musicID" element={<Home/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

