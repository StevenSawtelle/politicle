import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';

import AZSenateLanding from "./components/AZSenateLanding.component";
import USSenateLanding from "./components/USSenateLanding.component";

import './App.css';
import AZHouseLanding from "./components/AZHouseLanding.component";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={'politicle'}>Politicle</h1>
      </header>
      <div className={'main-content'}>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<USSenateLanding/>} />
            <Route exact path="/azSenate" element={<AZSenateLanding/>} />
              <Route exact path="/azHouse" element={<AZHouseLanding/>} />
          </Routes>
        </HashRouter>
      </div>
      <footer>
      <p className={'subtext'}>Happy Valentine's Day Abigail!</p>
      <p className={'subtext'}>A website by <a href='https://www.stevensawtelle.com'>Steven Sawtelle</a></p>
      </footer>
    </div>
  );
}

export default App;
