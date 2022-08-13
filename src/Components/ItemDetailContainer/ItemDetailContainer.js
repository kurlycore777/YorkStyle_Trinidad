import React, { useEffect, useState } from 'react'

//Router dom
import { useParams } from 'react-router-dom'

import { customFetch } from '../../Utils/customFetch'
import { productsData } from '../../Data/productsData'

//Components
import ItemDetail from '../ItemDetail/ItemDetail'

//MUI
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = () => {

    const [listProducts, setListProducts] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        customFetch(productsData).then(res => {
            setLoading(true)
            setListProducts(res.find(item => item.id === parseInt(id)))
        })
    }, [id])

    return (
        <>
            {loading ?
                <ItemDetail listProducts={listProducts} />
                :
                <div className="text-center mt-5 mb-5">
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default ItemDetailContainer