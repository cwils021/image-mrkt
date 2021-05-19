// Homepage
// FIXME User to be able to "buy card packs"
// TODO User can view card packs to purchase on page
//  TODO User can view buy now buttons for card packs
//  TODO Cards are added to users inventory

import React, { useState } from 'react'
import { Container, Grow, Grid, Button } from '@material-ui/core';
import axios from 'axios';




const HomePage = () => {
    const getImage = async () => {
        const res = await axios.get('https://picsum.photos/500');
        return res.request.responseURL;
    }



    return (
        <>
            <h1>HomePage</h1>
            <Grow in>
             <Container>
                 <Grid container direction='row'  justify="space-around" alignItems="center" spacing={3}>
                    <Grid container item xs={12} md={4} direction='column' alignItems='center' justify='center'>
                         <img src="https://picsum.photos/250?random=1" alt="Random"  />
                        <Button variant='contained' color='primary' onClick={() => {
                            getImage().then((res) => {alert(res)})
                        }}>
                            Buy Now!
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}><img src="https://picsum.photos/250?random=2" alt="Random2" /></Grid>
                    <Grid item xs={12} md={4}>Test 3</Grid>
                    <Grid item xs={12} md={4}>Test 4</Grid>
                    <Grid item xs={12} md={4}>Test 5</Grid>
                    <Grid item xs={12} md={4}>Test 6</Grid>
                 </Grid>
             </Container>
            </Grow>
       </>
    );
};

export default HomePage;
