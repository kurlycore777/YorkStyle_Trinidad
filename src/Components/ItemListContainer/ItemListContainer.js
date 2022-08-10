import React, { useEffect, useState } from 'react'

import { useParams, NavLink } from 'react-router-dom'

//CSS
import './ItemListContainer.css'

//MUI
import { Button, ButtonGroup, CircularProgress, Container } from '@mui/material';

//Components
import { customFetch } from '../../Utils/customFetch';
import ItemList from '../ItemList/ItemList';

//Data
import { productsData } from '../../Data/productsData';

const ItemListContainer = (props) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams()

    useEffect(() => {
        setLoading(false)
        customFetch(productsData).then(data => {
            if (category) {
                setLoading(true)
                setListProducts(data.filter(prod => prod.category === category))
            }
            else {
                setLoading(true)
                setListProducts(data)
            }
        })
    }, [category])


    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                {/* Categorias */}
                <div className="text-center category__">
                    <h3 className='font-weight-light'>Categorias</h3>
                    <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ flexWrap: 'wrap' }}>
                        <Button LinkComponent={NavLink} to="/">Todo</Button>
                        <Button LinkComponent={NavLink} to="/categorias/alimento">Alimentos</Button>
                        <Button LinkComponent={NavLink} to="/categorias/accesorios">Accesorios</Button>
                    </ButtonGroup>
                </div>

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
        </>
    )
}

export default ItemListContainer