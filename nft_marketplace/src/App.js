import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import { Link } from 'react-router-dom';
import Artists from './screens/Artists/Artists';
import getBlockchain from './ethereum.js';
import { useState, useEffect } from 'react';
import { ethers, Contract } from 'ethers';

//import and declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values


function App() {
  
  const [nft, setNFT] = useState('')
  // const [simpleNFT2, setSimpleNFT2] = useState('')
  const [data, setData] = useState('')
  const [tokenURI, setTokenURI] = useState('')

  useEffect(() => {
   
    const init = async () => {

      //importa o contrato e salva com setSimpleNFT
      const { nft } = await getBlockchain();
      // const data = await nft.get();
      console.log(nft,data)
      setNFT(nft);
      // setData(data);
    };
    init();
  }, []);

  const createNFT = async () => {
        const price = 10
        const tokenURI = "https://ipfs.io/ipfs/QmUBCCrobtCasb6YspAA5EPWe8VJuyADjxA6uVWTgq5dtg?filename=NftData.json"
        //Chama a funcao .createNFT() do contrato simpleNFT
        const tx = await nft.mint(tokenURI, price);
        await tx.wait();
        console.log("Success")
    
};

const set = async () => {
  //como pegar inputs do proprio UI? (Exemplo data)
  const data = "108"
 
  // Chama a funcao .set() do contrato simpleNFT
  const tx = await nft.set(data);
  await tx.wait();
 
  // console.log(tx.hash)
  console.log('This is the tx')
  //Chama a funcao .get() do contrato simpleNFT
  // const newData = await NFT.get();
  
  // setData(newData);
  //Le o dado fornecido pelo blockchain
  // console.log(newData.toString())


};

const get = async () => {
  
  try{
    // const newData = await NFT.get();
    // setData(newData)
    console.log(data.toString())
    
  }
  catch(error){
    console.log(error)
    console.log("failure")
  }
 

};

const connect = async () => {
      //connecta com o Metamask quando clicado
      try{
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const account = accounts[0]
      console.log(account)
      }
      catch(error){
        console.log(error)
      }
    };

const captureFile = async() =>{
  //Transformar o arquivo enviado em Buffer

  //  const file = event.target.files[0]
  //   const reader = new window.FileReader()
  //   reader.readAsArrayBuffer(file)

  //    reader.onloadend = () => {
  //     this.setState({ buffer: Buffer(reader.result) })
  //     console.log('buffer', this.state.buffer)

}
  
const upload = async() => {
  //Subir o Arquivo para o IPFS

  //Fazer o upload do arquivo no Blockchain

}
  







  return (
    <div className="App">
      <header className="App-header">
      </header>


      <BrowserRouter>

        <Link to="/">Home</Link>
        <Link to="/artists">Artists</Link>
        <br></br>
        <button  onClick={createNFT}>Create NFT</button>
        <br></br>
        <button onClick={set}>Set Data</button>
        <br></br>
        <button onClick={get}>Get Data</button>
        <br></br>
        <button onClick={connect}>connect()</button>
        <br></br>
        <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={captureFile} />
        <br></br>
        <button onClick={upload}>Upload</button>

        {/* <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Image description..."
                        required />
                  </div>
                <button type="submit" class="btn btn-primary btn-block btn-lg">Upload!</button>
              </form> */}
        
        <Switch>
          <Route path="/artits">
            <Artists />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
