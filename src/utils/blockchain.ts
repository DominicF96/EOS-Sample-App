import { ScatterJS, ScatterEOS, Network } from 'scatter-ts';
import { JsonRpc, Api } from 'eosjs';

ScatterJS.plugins(new ScatterEOS());

export const network : Network = ScatterJS.Network.fromJson({
  blockchain: 'eos',
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host: 'eos.greymass.com',
  port: 443,
  protocol: 'https',
});

export const rpc = new JsonRpc(network.fullhost(), { fetch });

export function getApi() {
  return ScatterJS.eos(network, Api, { rpc });
}
