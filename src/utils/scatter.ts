import { ScatterJS, Action } from 'scatter-ts';
import { network, getApi, rpc } from './blockchain';

export function connect() {
    return ScatterJS.connect('EOS Discovery', { network });
}

export async function login(): Promise<ScatterAccount> {
    const connected = await connect();
    if (!connected) return {};
    const id = await ScatterJS.login();
    if (!id) return {};
    return ScatterJS.account('eos');
}

export async function getAccount() {
    const { name, authority } = await login();
    return { account: name, permission: authority };
}

export async function getChain() {
    const { blockchain, chainId } = await login();
    return { blockchain, chainId };
}

export async function getBalance(account: string) {
    return await rpc.get_currency_balance('eosio.token', account, 'EOS');
    // balance}`);
    // const { name, authority } = await login();
}

export async function transact(actions: Action[]) {
    console.log(`scatter::transact:actions: ${JSON.stringify(actions, null, 2)}`);
    const options = { blocksBehind: 3, expireSeconds: 30 };
    const api = getApi();
    return api.transact({ actions }, options);
}

export interface ScatterAccount {
    authority?: string; // "active"
    blockchain?: string; // "eos"
    name?: string; // "wombatfoobar"
    publicKey?: string; // "EOS7AbxeKmdPNV6oKL5PurLse9XL32tSbhLUyg4oCiorBzvwRBeTG"
    isHardware?: boolean; // false
    chainId?: string; // "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
}