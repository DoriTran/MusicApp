import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>Hello</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

