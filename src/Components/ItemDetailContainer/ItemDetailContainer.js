import React, { useEffect, useState } from 'react'

//Router dom
import { useParams } from 'react-router-dom'

//Components
import ItemDetail from '../ItemDetail/ItemDetail'

//MUI
import CircularProgress from '@mui/material/CircularProgress';

//Firebase
import { db } from '../../Utils/Firebase/Firebase';
import { collection, getDoc, doc } from 'firebase/firestore';

const productosCollection = collection(db, "productos")

const ItemDetailContainer = () => {

    const [listProducts, setListProducts] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const referencia = doc(productosCollection, id)
        const consulta = getDoc(referencia)

        consulta
        .then((resp) =>{
            setLoading(true)
            setListProducts(resp.data())
        })
        .catch((err) =>{
            console.log(err)
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