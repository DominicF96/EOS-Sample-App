import React, { useEffect, useState } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

import walletAutoDetect from '../../utils/wallet';
import * as Scatter from "../../utils/scatter";

import styles from './UserBalance.module.scss';

const UserBalance = () => {

  interface IAccount {
    account: string | undefined,
    permission: string | undefined
  }

  const [account, setAccount] = useState<IAccount>({
    account: "Unknown",
    permission: "Unknown"
  });
  const [balance, setBalance] = useState<string[]>([]);

  useEffect(() => {
    Scatter.getAccount().then((account) => {
      console.log(account)
      setAccount(account);
    }).catch((e) => {
      console.error(e);
      setAccount({
        account: "Unknown",
        permission: "Unknown"
      });
    });
  }, [])

  useEffect(() => {
    if (account && account.account) {
      Scatter.getBalance(account.account).then((balance) => {
        setBalance(balance);
      }).catch(e => {
        console.error(e);
      });
    }
  }, [account])

  return (
    <div className={styles.UserBalance} data-testid="UserBalance">
      <h2>User Balance</h2>
      <section>
        <p>This section allows you to look up the detected Scatter compatible wallet's information and balance.</p>
        <dl>
          <div className={styles.KvRow}>
            <dt>Account</dt>
            <dd>{account?.account || "Unknown"}</dd>
          </div>
          <div className={styles.KvRow}>
            <dt>Permission</dt>
            <dd>{account?.permission || "Unknown"}</dd>
          </div>
          <div className={styles.KvRow}>
            <dt>Balance</dt>
            <dd>{balance[0] || "[]"}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

export default UserBalance;
