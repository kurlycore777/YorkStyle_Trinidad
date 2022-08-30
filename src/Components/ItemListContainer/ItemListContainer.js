import React, { useEffect, useState } from 'react'

import { useParams, NavLink } from 'react-router-dom'

//CSS
import './ItemListContainer.css'

//MUI
import { Button, ButtonGroup, CircularProgress, Container } from '@mui/material';

//Components
import ItemList from '../ItemList/ItemList';

//Firebase
import { db } from '../../Utils/Firebase/Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const productosCollection = collection(db, "productos")


const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams()

    useEffect(() => {

        if (!category) {
            const consulta = getDocs(productosCollection)

            consulta
                .then(snapshot => {
                    const producto = (snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    }))
                    setLoading(true)
                    setListProducts(producto)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            const filtro = query(productosCollection, where("category", "==", category))
            const consulta = getDocs(filtro)

            consulta
                .then(snapshot => {
                    const producto = (snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    }))
                    setLoading(true)
                    setListProducts(producto)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [category])

    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            {/* Categorias */}
            <div className="text-center category__">
                <h3 className='font-weight-light mb-0'>Categorias</h3>
                <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ flexWrap: 'wrap', mt: 2 }}>
                    <Button LinkComponent={NavLink} to="/">Todo</Button>
                    <Button LinkComponent={NavLink} to="/categorias/alimento">Alimentos</Button>
                    <Button LinkComponent={NavLink} to="/categorias/accesorios">Accesorios</Button>
                </ButtonGroup>
            </div>

            <div style={{ marginTop: '30px' }}>
                {
                    loading ? <ItemList listProducts={listProducts} setListProducts={setListProducts} />
                        :
                        <div className="text-center my-5">
                            <CircularProgress />
                        </div>
                }
            </div>
        </Container>
    )
}

export default ItemListContainer