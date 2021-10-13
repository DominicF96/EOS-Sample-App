import React, { useEffect, useState } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

import walletAutoDetect from '../../utils/wallet';
import * as Scatter from "../../utils/scatter";

import styles from './UserBalance.module.scss';

const UserBalance = () => {

  const [wallets, setWallets] = useState<Array<string>>([]);
  const [selectedWallet, setSelectedWallet] = useState<string>("");

  useEffect(() => {
    setWallets(walletAutoDetect());
  }, []);

  useEffect(() => {
    if (wallets && wallets.length > 0) {
      setSelectedWallet(wallets[0]);
    }
  }, [wallets]);

  const handleSelectWallet = (event: SelectChangeEvent) => {
    setSelectedWallet(event.target.value as string);
  };

  return (
    <div className={styles.UserBalance} data-testid="UserBalance">
      <h2>User Balance</h2>
      <section>
        <p>This section allows you to look up a specific wallet's balance.</p>
        <h3>1. Pick Wallet</h3>
        <section>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedWallet}
            defaultValue={wallets ? wallets[0] : undefined}
            label="Wallet"
            onChange={handleSelectWallet}
            variant="filled"
          >
            {wallets.map((wallet) => {
              return <MenuItem value={wallet}>{wallet}</MenuItem>
            })}
          </Select>
        </section>
        <h3>2. Profit</h3>
          <section>
            Info.
          </section>
      </section>
    </div>
  );
}

export default UserBalance;
