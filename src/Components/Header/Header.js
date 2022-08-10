import React from 'react';

//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom'


import CardWidget from '../CartWidget/CardWidget';

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
                    <Link to='/' className='text-reset' style={{ flexGrow: 1, textDecoration: 'none' }}>
                        <Typography variant="h6" component="div">
                            YorkStyle
                        </Typography>
                    </Link>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                        <Button color="inherit" component={Link} to='/'>Inicio</Button>
                        <Button color="inherit">Login</Button>
                    </Box>
                    {/* Card widget */}
                    <Link to="" className='text-reset'>
                        <CardWidget />
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header