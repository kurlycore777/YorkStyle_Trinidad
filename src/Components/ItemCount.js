import React, { useState } from 'react'

//MUI
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({ stock, initial }) {

    const [contador, setContador] = useState(initial)

    //Aumentar el contador
    const handleAumentar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    //Decrementar el contador
    const handleDisminuir = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div>
                <div className='border mx-auto' style={{ width: '170px', borderRadius: '5px' }}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <IconButton disabled={contador === initial} onClick={handleDisminuir} color="primary">
                                <RemoveIcon />
                            </IconButton>
                        </div>

                        <div className='my-auto'>
                            {contador}
                        </div>

                        <div>
                            <IconButton disabled={contador === stock || stock === 0} onClick={handleAumentar} color="primary">
                                <AddIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-2'>
                    <Button variant='outlined' disabled={stock === 0}>Agregar al carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount