import React from 'react'

//MUI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ItemListContainer = (props) => {
    return (
        <>
            <Container maxWidth="lg" sx={{mt: 5}}>
                <Typography variant="h4" align='center' sx={{fontWeight: 'bold'}}>
                    {props.greeting}
                </Typography>
            </Container>
        </>
    )
}

export default ItemListContainer