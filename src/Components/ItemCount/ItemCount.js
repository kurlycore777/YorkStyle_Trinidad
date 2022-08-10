import React, { useState } from 'react'

//MUI
import Typography from '@mui/material/Typography';
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
            <div className='d-flex justify-content-start flex-wrap'>
                <div className='my-auto mr-2'>
                    <Typography variant="subtitle1" component="div">
                        Cantidad: 
                    </Typography>
                </div>
                <div className='border' style={{ width: '170px', borderRadius: '5px' }}>
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
            </div>
        </>
    )
}

export default ItemCount