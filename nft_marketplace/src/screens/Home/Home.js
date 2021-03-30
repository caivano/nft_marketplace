import React from 'react';

import { Button, Container } from '@material-ui/core';
import { useState } from 'react';

const Home = () => {
    const [address, setAddress] = useState('')
    const [provider, setProvider] = useState('')

    const getAddress = () => {
        //código que pega o endereço
        return 'endereço da carteira'
    }

    const handleClick = () => {
        const userAddress = getAddress()
        setAddress(userAddress)

        console.log(address)
    }

    return (
        
        <Container>
            <Button variant="contained" color="primary" onClick={handleClick}>buy</Button>
            <Button variant="contained"color="primary">connect</Button>
        </Container>
     );
}
 
export default Home;