import React, { useState } from 'react';

//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom'


import CardWidget from '../CartWidget/CardWidget';

const Header = () => {

    const [sidebar, setSidebar] = useState(false);
    const openSidebar = () => {
        setSidebar(true)
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    }

    const closeSidebar = () => {
        setSidebar(false)
        document.body.style.position = 'relative';
        document.body.style.width = 'auto';
    }

    return (
        <>
            <AppBar position="static" style={{ background: '#ffff', color: '#000' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={openSidebar}
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
                        <Button color="inherit" component={Link} to='/' className='text-reset'>Inicio</Button>
                    </Box>
                    {/* Card widget */}
                    <Link to="/carrito" className='text-reset'>
                        <CardWidget />
                    </Link>
                </Toolbar>
            </AppBar>

            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        open={sidebar}
                        onClose={closeSidebar}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <Link to='/'
                                style={{textAlign: 'center'}}
                                onClick={() => {
                                    closeSidebar();
                                }}>
                                <div className="px-2 py-4 mx-auto">
                                    <h4 style={{marginBottom: 0}}>YorkStyle</h4>
                                </div>
                            </Link>
                            <Divider />
                            <List>
                                <Link to='/' className="text-reset text-decoration-none"
                                    onClick={() => {
                                        closeSidebar();
                                    }}
                                >
                                    <ListItem button disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Inicio" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
            {/* Fin Drawer mobile */}
        </>
    )
}

export default Header