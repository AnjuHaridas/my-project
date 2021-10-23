import { Button, TextField } from '@material-ui/core'
import React from 'react'

const EmployeeForm = () => {
    return (
        <div>
            <TextField
            fullWidth
            variant="outlined"
            label="Enter your full name"
            margin="dense"
            />
            <TextField 
            fullWidth
            variant="outlined"
            label="Enter your Address"
            margin="dense"
            />
            
            <TextField 
            fullWidth
            label="Pincode"
            margin="dense"
            variant="outlined"
            />
            <TextField 
            fullWidth
            variant="outlined"
            label="Mobile Number"
            margin="dense"
            type="number"
            />
            <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            label="Enter your e-mail address"
            />
            <TextField 
            fullWidth
            variant="outlined"
            margin="dense"
            label="Enter a Password"
            type="password"
            />
            <TextField 
            fullWidth
            variant="outlined"
            margin="dense"
            label="Confirm your Password"
            type="password"
            />
            <Button
            variant="contained"
            color="primary"
            fullWidth
            >SUBMIT</Button>

        </div>
    )
}

export default EmployeeForm
