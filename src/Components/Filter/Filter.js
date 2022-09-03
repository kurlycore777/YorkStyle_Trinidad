import React, { useState } from 'react'

//MUI
import { Button, Menu, MenuList, MenuItem, ListItemText, ListItemIcon } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListIcon from '@mui/icons-material/List';

const Filter = ({ listProducts, setListProducts }) => {

    //Open menu para filtrar
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    //Filtrar por mayor precio
    function HighPrice() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.price < b.price ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }

    //Filtrar por menor precio
    function LowPrice() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.price > b.price ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }

    //Nombre A - Z
    function HighName() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.title > b.title ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }

    //Nombre Z - A
    function LowName() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.title < b.title ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }

    return (
        <>
            <Button onClick={handleMenu} variant="contained">Filtrar por <ListIcon sx={{ ml: 1.2 }} /></Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuList>
                    {/* mayor precio */}
                    <MenuItem onClick={HighPrice}>
                        <ListItemIcon>
                            <ArrowUpwardIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Mayor precio</ListItemText>
                    </MenuItem>

                    {/* Menor precio */}
                    <MenuItem onClick={LowPrice}>
                        <ListItemIcon>
                            <ArrowDownwardIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Menor precio</ListItemText>
                    </MenuItem>

                    {/* Nombre A - Z */}
                    <MenuItem onClick={HighName}>
                        <ListItemIcon>
                            <ArrowUpwardIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Nombre A - Z</ListItemText>
                    </MenuItem>

                    {/* Nombre Z - A */}
                    <MenuItem onClick={LowName}>
                        <ListItemIcon>
                            <ArrowDownwardIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Nombre Z - A</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default Filter