import React from 'react'

//Components
import Item from '../Item/Item'

const ItemList = ({ listProducts }) => {

    return (
        <>
            <div className="row">
                {
                    listProducts.map(product =>
                        <Item key={product.id} product={product} />
                    )
                }
            </div>
        </>
    )
}

export default ItemList