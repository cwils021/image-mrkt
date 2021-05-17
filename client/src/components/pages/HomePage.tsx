// Homepage
// FIXME User to be able to "buy card packs"
// TODO User can view card packs to purchase on page
//  TODO User can view buy now buttons for card packs
//  TODO Cards are added to users inventory

import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core';


const HomePage = () => {
    return (
        <>
            <h1>HomePage</h1>
            <Grow in>
             <Container>
                 <Grid container direction='row'  justify="space-around" alignItems="center" spacing={3}>
                    <Grid item xs={12} md={4}><img src="https://picsum.photos/200?random=1" alt="Random"  /></Grid>
                    <Grid item xs={12} md={4}><img src="https://picsum.photos/200?random=2" alt="Random2" /></Grid>
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
