import React, { useEffect, useState } from 'react';
import walletAutoDetect from '../../utils/wallet';
import styles from './AvailableWallets.module.scss';

const AvailableWallets = () => {

  const [wallets, setWallets] = useState<Array<String>>([]);

  useEffect(() => {
    setWallets(walletAutoDetect());
  }, []);

  return (
    <div className={styles.AvailableWallets} data-testid="AvailableWallets">
      <h2>Available Wallets</h2>
      <section>
        <p>This section displays a list of wallets that are ready to used (installed on browser).</p>
        {wallets && wallets.length > 0 ? <>
          {wallets.map(wallet => {
            return <div className={styles.Wallet}>
              <img src={`/images/wallets/${wallet}.png`} alt="Wallet logo"/>
              <h3>{wallet}</h3>
            </div>
          })}
        </> : "None"}
      </section>
    </div>
  );
}

export default AvailableWallets;
