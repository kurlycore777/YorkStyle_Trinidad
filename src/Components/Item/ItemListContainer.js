import React, { useEffect, useState } from 'react'

//MUI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

//Components
import ItemCount from './ItemCount';
import { customFetch } from '../../Utils/customFetch';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';

//Data
import { productsData } from '../../Data/productsData';

const ItemListContainer = (props) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        customFetch(productsData).then(data => {
            setLoading(true)
            setListProducts(data)
        })
    }, [])


    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5 }}>
                {/* Greeting */}
                <Typography variant="h4" align='center' sx={{ fontWeight: 'bold' }}>
                    {props.greeting}
                </Typography>

                {/* Contador 
                <div className="mt-5">
                    <ItemCount stock={5} initial={1} />
                </div>*/}

                <div className="mt-3">
                    {
                        loading ? <ItemList listProducts={listProducts} />
                            :
                            <div className="text-center">
                                <CircularProgress />
                            </div>
                    }
                </div>
            </Container>

            <Container maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
                <div>
                    <ItemDetailContainer />
                </div>
            </Container>
        </>
    )
}

export default ItemListContainer