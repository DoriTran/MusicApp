import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

