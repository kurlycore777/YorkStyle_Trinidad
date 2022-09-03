import React, { useState } from 'react'

import { Box, TextField } from '@mui/material'

//Components
import Item from '../Item/Item'

//CSS
import './ItemList.css'
import Filter from '../Filter/Filter';

const ItemList = ({ listProducts, setListProducts }) => {

    const [search, setNewSearch] = useState("");
    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };
    const filtered = !search
        ? listProducts
        : listProducts.filter((prod) =>
            prod.title.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <TextField className='search' type='search' variant='outlined' size='small' label="Buscar por nombre" onChange={handleSearchChange} sx={{ my: 'auto' }} />
                <div className='filter__by' style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <Filter setListProducts={setListProducts} listProducts={listProducts} />
                </div>
            </Box>
            <div className="row">
                {filtered.map((product) => {
                    return (
                        <Item key={product.id} product={product} />
                    );
                })}
            </div>
        </>
    )
}

export default ItemList