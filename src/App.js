import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="employee" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

