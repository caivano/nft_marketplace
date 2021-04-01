
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import NFT from './contracts/NFT.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {

      await provider.request({ method: 'eth_requestAccounts' });

      const networkId = await provider.request({ method: 'net_version' })

      provider = new ethers.providers.Web3Provider(provider);

      const signer = provider.getSigner();

      const nft = new Contract(
        "0xd6F8d40e5eAeE3139F158B85010a2f001FBFBA6b", 
        NFT.abi,
        signer
      );
      
      const simpleNFT2 = new Contract(
        "0x2e2622959efe97F4C284039834ef0eFDbB08bFFc",
        NFT.abi,
        provider
      );
      resolve({nft});
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;