import React, { useEffect, useState } from 'react';

import { getApi, network, rpc } from "./utils/blockchain";
import walletAutoDetect from './utils/wallet';
import TokenTransfer from "./components/TokenTransfer/TokenTransfer";
import logo from './logo.svg';

import './App.scss';
import useInterval from 'use-interval';
import NetworkInfo from './components/NetworkInfo/NetworkInfo';

function App() {

  const [wallets, setWallets] = useState<Array<String>>([]);

  useEffect(() => {
    setWallets(walletAutoDetect());
  }, []);

  // WALLET RELATED =================================================

  const renderAvailableWallets = () => {
    return <>
      <h2>Available Wallets</h2>
      {wallets && wallets.length > 0 ? <>
        {wallets.map(wallet => {
          return <div className="wallet">
            <img src={`/images/wallets/${wallet}.png`} alt="Wallet logo"/>
            <h3>{wallet}</h3>
          </div>
        })}
      </> : "None"}
    </>
  }

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
        {renderAvailableWallets()}
        <NetworkInfo/>
        <TokenTransfer/>
      </main>
    </div>
  );
}

export default App;
