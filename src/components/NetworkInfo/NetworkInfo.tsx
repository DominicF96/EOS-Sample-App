import React, { useEffect, useState } from 'react';
import useInterval from 'use-interval';

import { network, rpc } from "../../utils/blockchain";

import styles from './NetworkInfo.module.scss';

const NetworkInfo = () => {

  const [isNetworkOnline, setIsNetworkOnline] = useState<Boolean>(false);
  const networkInfoKeys = ["blockchain", "chainId", "host", "name", "port", "protocol", "token"];

  useEffect(() => {
    pingNetwork();
  },[]);

  const pingNetwork = () => {
    fetch(rpc.endpoint).then((res) => {
      setIsNetworkOnline(true);
    }).catch((e) => {
      setIsNetworkOnline(false);
    })
  }
  useInterval(pingNetwork, 10000);

  return (
    <div className={styles.NetworkInfo} data-testid="NetworkInfo">
      {network && <>
        <h2>Network Info</h2>
        <dl>
          <div className={styles.KvRow}>
            <dt>Online</dt>
            <dd><div className={isNetworkOnline ? styles.NetworkStatusOnline : styles.NetworkStatusOffline}/></dd>
          </div>
          {networkInfoKeys.map((key) => {
            return <div className={styles.KvRow}>
              <dt>{key}</dt>
              <dd className={!network[key] && styles.MissingValue}>{network[key] || "None"}</dd>
            </div>
          })}
        </dl>
      </>}
    </div>
  );
}

export default NetworkInfo;
