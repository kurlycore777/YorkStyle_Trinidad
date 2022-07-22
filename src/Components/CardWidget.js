import React from 'react'

//MUI
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

function CardWidget() {
    return (
        <>
            <IconButton size="large" color="inherit">
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    )
}

export default CardWidget