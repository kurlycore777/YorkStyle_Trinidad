import React, { useContext } from 'react'

//MUI
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

//Context
import { CartContext } from '../../Context/CartContext';

const CardWidget = () => {

    const { getItemQuantity } = useContext(CartContext)

    return (
        <>
            <IconButton size="large" color="inherit">
                <Badge badgeContent={getItemQuantity()} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    )
}

export default CardWidget