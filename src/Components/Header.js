import React from 'react';

//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import CardWidget from './CardWidget';

function Header() {
    return (
        <>
            <AppBar position="static" style={{ background: '#ffff', color: '#000' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        YorkStyle
                    </Typography>
                    <Button color="inherit">Inicio</Button>
                    <Button color="inherit">Login</Button>
                    <CardWidget />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header