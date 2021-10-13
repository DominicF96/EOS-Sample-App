import React from "react";

import NetworkInfo from './components/NetworkInfo/NetworkInfo';
import AvailableWallets from "./components/AvailableWallets/AvailableWallets";
import UserBalance from "./components/UserBalance/UserBalance";
import TokenTransfer from "./components/TokenTransfer/TokenTransfer";
import logo from './logo.svg';

import './App.scss';

function App() {

  // NETWORK RELATED =================================================
  return (
    <div className="App">
      <header className="header">
        <div className="branding">
          <img src={logo} className="app-logo"/>
          <h1>EOS Discovery</h1>
        </div>
      </header>
      <main>
        <AvailableWallets/>
        <NetworkInfo/>
        <UserBalance/>
        <TokenTransfer/>
      </main>
    </div>
  );
}

export default App;
