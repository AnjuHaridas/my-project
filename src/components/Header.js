import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6"  >EMPLOYEE REGISTRATION FORM</Typography>
                </Toolbar>
            </AppBar>
            
            <Typography variant="h6" color="primary">
                <p> REGISTER HERE </p>
            </Typography>

        </div>
    )
}

export default Header
