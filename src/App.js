import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { useState } from "react";

import List from "./pages/tabs/List.js"
import Song from "./pages/tabs/Song.js"
import Add from "./pages/tabs/Add.js"

function App() {
  const [language, setLanguage] = useState("English")

  // Page state
  const [page, setPage] = useState(1)
  const [pagesize, setPagesize] = useState(10)
  const [searchKey, setSearchKey] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/songlist" element={<List language={language} setLanguage={setLanguage} 
          page={page} setPage={setPage}
          pagesize={pagesize} setPagesize={setPagesize}
          searchKey={searchKey} setSearchKey={setSearchKey}/>} />
        <Route path="/songdetail/status=:status/id=:id" element={<Song language={language} setLanguage={setLanguage}/>} />
        <Route path="/songadd" element={<Add language={language} setLanguage={setLanguage}/>} />
        <Route path="*" element={<Navigate replace to='/songlist' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

