import React, { useState } from 'react'

//Router dom
import { Link } from 'react-router-dom';

//MUI
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';

const ItemCount = ({ stock, initial, onAdd, setCantidad, cantidad }) => {

    //Aumentar el contador
    const handleAumentar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    //Decrementar el contador
    const handleDisminuir = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        }
    }

    const [button, setButton] = useState(false)

    return (
        <>
            {/* Contador */}
            <div className='d-flex justify-content-start flex-wrap mb-3'>
                <div className='my-auto mr-2'>
                    <Typography variant="subtitle1" component="div">
                        Cantidad:
                    </Typography>
                </div>
                <div className='border' style={{ width: '170px', borderRadius: '5px' }}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <IconButton disabled={cantidad === initial} onClick={handleDisminuir} color="primary">
                                <RemoveIcon />
                            </IconButton>
                        </div>

                        <div className='my-auto'>
                            {cantidad}
                        </div>

                        <div>
                            <IconButton disabled={cantidad === stock || stock === 0} onClick={handleAumentar} color="primary">
                                <AddIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

            <Button
                variant='contained'
                onClick={() => {
                    onAdd()
                    setButton(true)
                }}
                sx={{ width: '100%', height: '50px' }}
            >
                Agregar al carrito
            </Button>

            {button ?

                <div className='mt-3'>
                    <Link to="/carrito" className='text-reset text-decoration-none'>
                        <Button
                            variant='outlined'
                            sx={{ width: '100%', height: '50px' }}
                        >
                            Ver carrito
                        </Button>
                    </Link>
                </div>

                : null}
        </>
    )
}

export default ItemCount