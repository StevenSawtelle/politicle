import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AZSenateLanding from "./components/AZSenateLanding.component";
import USSenateLanding from "./components/USSenateLanding.component";

import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={'politicle'}>Politicle</h1>
      </header>
      <div className={'main-content'}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<USSenateLanding/>} />
            <Route path="/azSenate" element={<AZSenateLanding/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>
      <p className={'subtext'}>Happy Valentine's Day Abigail!</p>
      <p className={'subtext'}>A website by <a href='https://www.stevensawtelle.com'>Steven Sawtelle</a></p>
      </footer>
    </div>
  );
}

export default App;
