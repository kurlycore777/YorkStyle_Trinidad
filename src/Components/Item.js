import React from 'react'

//MUI
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

function Item({ product }) {
    return (
        <>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4'>
                <div className="border p-4" style={{ boxShadow: '0 2px 4px 2px rgb(0 0 0 / 20%)', borderRadius: '5px' }}>
                    {/* Image */}
                    <div className="text-center">
                        <a href="#!">
                            <img src={product.image} width="100%" alt={product.image} />
                        </a>
                    </div>

                    {/* nombre del producto */}
                    <div className='text-center mt-3'>
                        <a href="#!" className="text-decoration-none text-reset">
                            <Tooltip title={product.title.trim()}>
                                {product.title.length > 24 ? (
                                    <Typography
                                        variant="h6"
                                        component="div"
                                    >
                                        {`${product.title.trim().slice(0, 22)}...`}
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="h6"
                                        component="div"
                                    >
                                        {product.title}{" "}
                                    </Typography>
                                )}
                            </Tooltip>
                        </a>
                    </div>

                    <div className="text-center mt-1">
                        <Typography variant='body1' sx={{ color: '#66bb6a', fontWeight: 'bold' }}>
                            ${product.price}.00 MXN
                        </Typography>
                    </div>

                    <div className="text-center mt-3">
                        <Button variant='contained'>Ver detalles</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Item