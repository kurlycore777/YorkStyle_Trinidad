import React, { useEffect, useState } from 'react'

import { customFetch } from '../../Utils/customFetch'
import { productsData } from '../../Data/productsData'

//Components
import ItemDetail from './ItemDetail'

//MUI
import CircularProgress from '@mui/material/CircularProgress';

function ItemDetailContainer() {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        customFetch(productsData).then(res => {
            setLoading(true)
            setListProducts(res.find(item => item.id === 1))
        })
    }, [])

    return (
        <>
            {loading ?
                <ItemDetail listProducts={listProducts} />
                :
                <div className="text-center">
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default ItemDetailContainer