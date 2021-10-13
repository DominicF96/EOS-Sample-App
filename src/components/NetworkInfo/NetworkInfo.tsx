import React, { useEffect, useState } from 'react';
import useInterval from 'use-interval';

import { network, rpc } from "../../utils/blockchain";

import styles from './NetworkInfo.module.scss';

const NetworkInfo = () => {

  const [isNetworkOnline, setIsNetworkOnline] = useState<Boolean>(false);
  const networkInfoKeys : Array<string> = ["blockchain", "chainId", "host", "name", "port", "protocol", "token"];

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
      <h2>Network Info</h2>
      <section>
        <p>This section displays the current information of the blockchain network we're currently connected to.</p>
        {network && <>
          <dl>
            <div className={styles.KvRow}>
              <dt>Online</dt>
              <dd><div className={isNetworkOnline ? styles.NetworkStatusOnline : styles.NetworkStatusOffline}/>
                {isNetworkOnline ? "Online" : "Offline"}
              </dd>
            </div>
            <div className={styles.KvRow}>
              <dt>Blockchain</dt>
              <dd className={!network.blockchain || network.blockchain.length <= 0 ? styles.MissingValue : ""}>{network.blockchain || "None"}</dd>
            </div>
            <div className={styles.KvRow}>
              <dt>chainId</dt>
              <dd className={!network.chainId || network.chainId.length <= 0 ? styles.MissingValue : ""}>{network.chainId || "None"}</dd>
            </div>
            <div className={styles.KvRow}>
              <dt>host</dt>
              <dd className={!network.host || network.host.length <= 0 ? styles.MissingValue : ""}>{network.host || "None"}</dd>
            </div>
            <div className={styles.KvRow}>
              <dt>name</dt>
              <dd className={!network.name || network.name.length <= 0 ? styles.MissingValue : ""}>{network.name || "None"}</dd>
            </div>
            <div className={styles.KvRow}>
              <dt>port</dt>
              <dd className={!network.port || network.port.length <= 0 ? styles.MissingValue : ""}>{network.port || "None"}</dd>
            </div>
            <div className={styles.KvRow}>
              <dt>protocol</dt>
              <dd className={!network.protocol || network.protocol.length <= 0 ? styles.MissingValue : ""}>{network.protocol || "None"}</dd>
            </div>
            <div className={styles.KvRow}>
              <dt>token</dt>
              <dd className={!network.token ? styles.MissingValue : ""}>{network.token || "None"}</dd>
            </div>
          </dl>
        </>}
      </section>
    </div>
  );
}

export default NetworkInfo;
