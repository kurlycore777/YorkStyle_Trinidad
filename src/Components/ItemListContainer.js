import React from 'react'

//MUI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

//Components
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5 }}>
                {/* Greeting */}
                <Typography variant="h4" align='center' sx={{ fontWeight: 'bold' }}>
                    {props.greeting}
                </Typography>

                {/* Contador */}
                <div className="mt-5">
                    <ItemCount stock={5} initial={1} />
                </div>
            </Container>
        </>
    )
}

export default ItemListContainer