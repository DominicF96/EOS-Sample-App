/**
 * Automatically detects accessible wallets and returns them in
 * an array.
 * 
 * @returns Array of installed wallets
 */
const walletAutoDetect = () : Array<String> => {

    const { ethereum, __wombat__ } = window as any;
    const availableWallets = [];

    if (!ethereum && !__wombat__) return [];
    if (ethereum.isTokenPocket) availableWallets.push('tokenpocket');
    if (ethereum.isMetaMask) availableWallets.push('metamask');
    if (ethereum.isMYKEY) availableWallets.push('mykey');
    if (__wombat__) availableWallets.push('wombat');

    return availableWallets;
}

export default walletAutoDetect;