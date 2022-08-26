import React from 'react'

//Router dom
import { Link } from 'react-router-dom'

//CSS
import './Item.css'

//MUI
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({ product }) => {
    return (
        <>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3 card__'>
                <div className="border p-4 card__item" style={{ boxShadow: '0 2px 4px 2px rgb(0 0 0 / 20%)', borderRadius: '5px' }}>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-6">
                            {/* Image */}
                            <div className="text-center">
                                <Link to={`/producto/${product.id}`}>
                                    <img className='card__image' src={product.image} width="80%" alt={product.image} />
                                </Link>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-6">
                            {/* nombre del producto */}
                            <div className='mt-3'>
                                <Link to={`/producto/${product.id}`} className="text-decoration-none text-reset">
                                    <Typography
                                        variant="body1"
                                        component="div"
                                    >
                                        {product.title}
                                    </Typography>
                                </Link>
                            </div>

                            <div className="text-left text-sm-center mt-3">
                                <Typography variant='body1' sx={{ color: '#66bb6a', fontWeight: 'bold' }}>
                                    ${product.price}.00 MXN
                                </Typography>
                            </div>

                            <div className="text-left text-sm-center mt-3 card__button">
                                <Link to={`/producto/${product.id}`} className='text-decoration-none'>
                                    <Button variant='contained'>Ver detalles</Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="text-left text-sm-center mt-3 card__button__flex">
                        <Link to={`/producto/${product.id}`} className='text-decoration-none'>
                            <Button variant='contained' sx={{ width: '100%' }}>Ver detalles</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item