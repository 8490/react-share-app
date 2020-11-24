import React from 'react'
import { TextField, Button } from '@material-ui/core';

const Signup = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="Display Name" variant="outlined" />
            <TextField id="outlined-basic" label="E mail" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" color="primary">
  SUBMIT
</Button>
<Button variant="contained" color="primary">
  SIGNUP WITH GOOGLE
</Button>




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
