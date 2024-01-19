import React from "react";

import AZSenateLanding from "./components/AZSenateLanding.component";
import AZHouseLanding from "./components/AZHouseLanding.component";
import USSenateLanding from "./components/USSenateLanding.component";

import './App.css';

const App = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const versionParam = searchParams.get('version');
    console.log(versionParam)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={'politicle'}>Politicle</h1>
      </header>
      <div className={'main-content'}>
          {!versionParam && <USSenateLanding />}
          {versionParam === 'usSenate' && <USSenateLanding />}
          {versionParam === 'azSenate' && <AZSenateLanding />}
          {versionParam === 'azHouse' && <AZHouseLanding />}
      </div>
      <footer>
      <p className={'subtext'}>Happy Valentine's Day Abigail!</p>
      <p className={'subtext'}>A website by <a href='https://www.stevensawtelle.com'>Steven Sawtelle</a></p>
      </footer>
    </div>
  );
}

export default App;
