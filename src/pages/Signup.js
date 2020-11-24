import React from 'react'
import { TextField, Button, Grid, Container } from '@material-ui/core';

const Signup = () => {
    return (
        <div>
          <Container maxwidth>
          <Grid container spacing={3}>
            <Grid item xs={12}><TextField id="outlined-basic" label="Display Name" variant="outlined" fullWidth/></Grid>
            <Grid item xs={12}><TextField id="outlined-basic" label="E mail" variant="outlined" fullWidth/></Grid>
            <Grid item xs={12}><TextField id="outlined-basic" label="Password" variant="outlined" fullWidth/></Grid>
            <Grid item xs={12}><Button variant="contained" color="primary" fullWidth>SUBMIT</Button></Grid>
            <Grid item xs={12}><Button variant="contained" color="primary" fullWidth>SIGNUP WITH GOOGLE</Button></Grid>

          </Grid>
          </Container>




            {/*
            // display name input  
            // e mail input
            // password input
            // submit button
            // google signup button
             */}
        </div>
    )
}

export default Signup
