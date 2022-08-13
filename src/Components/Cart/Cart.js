import React from 'react'

//Router doom
import { Link } from 'react-router-dom'

//MUI
import { Container, Breadcrumbs, Typography } from '@mui/material'

const Cart = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                <h2 className='font-weight-light'>Carrito</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/">
                        Inicio
                    </Link>
                    <Typography color="text.primary">Carrito</Typography>
                </Breadcrumbs>
            </Container>
        </>
    )
}

export default Cart