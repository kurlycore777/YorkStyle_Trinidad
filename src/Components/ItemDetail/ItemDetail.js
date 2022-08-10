import React, { useState } from 'react'

//CSS
import './ItemDetail.css'

//gallery
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

//MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PlaceIcon from '@mui/icons-material/Place';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Container } from '@mui/material';

//Components
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ listProducts }) {

    const images = [
        {
            original: listProducts.image,
            thumbnail: listProducts.image,
        }
    ];

    //Wish list
    const [wishlist, setWisthList] = useState(false)

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
                <Grid container spacing={2}>
                    {/* Imagen del producto */}
                    <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                        <div className="image__fixed">
                            <ImageGallery items={images} showPlayButton={false} useBrowserFullscreen={false}
                                showFullscreenButton={false} thumbnailPosition="left" showNav={false}
                                disableThumbnailSwipe={true} disableThumbnailScroll={true} />
                        </div>
                    </Grid>

                    {/* Información de producto */}
                    <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                        {/* Nombre del producto */}
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            {listProducts.title}
                        </Typography>

                        {/* Rating del producto */}
                        <div className="d-flex justify-content-start mt-3">
                            <StarIcon sx={{ color: '#F4D03F' }} />
                            <StarIcon sx={{ color: '#F4D03F' }} />
                            <StarIcon sx={{ color: '#F4D03F' }} />
                            <StarIcon sx={{ color: '#F4D03F' }} />
                            <StarIcon sx={{ color: '#F4D03F' }} />
                            <div className='ml-2'>
                                <a className='text-decoration-none' href="#!">(56)</a>
                            </div>
                        </div>

                        {/* Precio del producto */}
                        <div className='mt-3'>
                            <Typography variant="body1" component="div" sx={{ color: 'rgba(0,0,0,.55);' }}>
                                <del>$1500.00</del>
                            </Typography>
                            <div className="d-flex justify-content-start flex-wrap">
                                <div className='my-auto mr-2'>
                                    <Typography variant="h5" component="div" sx={{ fontSize: '36px' }}>
                                        ${listProducts.price}.00
                                    </Typography>
                                </div>
                                <div className='my-auto'>
                                    <Typography variant="body1" component="div" sx={{ color: '#00a650' }}>
                                        11% OFF
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="body1" component="div">
                                en <span style={{ color: '#00a650' }}>9x $148.333333333** sin interés</span>
                            </Typography>
                        </div>

                        {/* Acerca del producto */}
                        <div className="mt-4">
                            <Typography variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
                                Acerca del producto
                            </Typography>
                            <Container>
                                <ul className='mt-2' style={{ fontSize: '14px', color: 'gray' }}>
                                    <li className='mt-2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been.
                                    </li>
                                    <li className='mt-2' style={{ fontSize: '14px', color: 'gray' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting.
                                    </li>
                                    <li className='mt-2' style={{ fontSize: '14px', color: 'gray' }}>
                                        Lorem Ipsum is simply dummy text.
                                    </li>
                                    <li className='mt-2' style={{ fontSize: '14px', color: 'gray' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </li>
                                </ul>
                            </Container>
                            {/* Fin Acerca del producto */}

                        </div>
                    </Grid>

                    {/* Comprar producto */}
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <div className="border p-4" style={{ borderRadius: '8px' }}>
                            {/* Envíos */}
                            <div className="d-flex justify-content-start-flex-wrap">
                                <div className="mr-3">
                                    <LocalShippingIcon sx={{ color: '#00a650' }} />
                                </div>
                                <div className='mt-1'>
                                    <Typography variant="body1" component="div" sx={{ color: '#00a650' }}>
                                        Envío gratis a todo el país
                                    </Typography>
                                    <Typography variant='subtitle2' sx={{ color: 'rgba(0,0,0,.55)' }}>
                                        Conoce los las formas de envío y disponibilidad.
                                    </Typography>
                                    <a href="#!" className='text-decoration-none'><PlaceIcon sx={{ fontSize: 18 }} /> Calcular cuándo llega</a>
                                </div>
                            </div>

                            {/* Stock */}
                            <div className="mt-3">
                                <Typography variant="body1" component="div" sx={{ color: 'rgba(0,0,0,.55)' }}>
                                    <span className='font-weight-bold' style={{ color: '#000' }}>
                                        Stock: </span>({listProducts.stock} disponibles)
                                </Typography>
                            </div>

                            <div className="mt-3">
                                <ItemCount stock={5} initial={1} />
                            </div>

                            {/* Button comprar ahora */}
                            <div className="mt-3">
                                <Button variant='contained' sx={{ width: '100%', height: '50px' }}>Comprar ahora</Button>
                            </div>

                            {/* Devolución gratis */}
                            <div className="d-flex justify-content-start-flex-wrap mt-3">
                                <div className="mr-3">
                                    <ReplayIcon sx={{ color: 'rgba(0,0,0,.55)' }} />
                                </div>
                                <div>
                                    <a href="#!">Devolución gratis.</a>
                                    <Typography variant='subtitle2' sx={{ color: 'rgba(0,0,0,.55)' }}>
                                        Tienes 30 días desde que lo recibes.
                                    </Typography>
                                </div>
                            </div>

                            {/* Compra protegida */}
                            <div className="d-flex justify-content-start-flex-wrap mt-3">
                                <div className="mr-3">
                                    <VerifiedUserIcon sx={{ color: 'rgba(0,0,0,.55)' }} />
                                </div>
                                <div>
                                    <a href="#!">Compra protegida.</a>
                                    <Typography variant='subtitle2' sx={{ color: 'rgba(0,0,0,.55)' }}>
                                        Recibe el producto que esperabas o te devolvemos tu dinero.
                                    </Typography>
                                </div>
                            </div>

                            {/* Wishlist */}
                            <div className="mt-3">
                                <Button variant='outlined' onClick={() => {
                                    setWisthList(wishlist ? false : true)
                                }}>
                                    {wishlist ? <FavoriteIcon sx={{ mr: 1 }} />
                                        : <FavoriteBorderIcon sx={{ mr: 1 }} />
                                    }
                                    Agregar a la Wish List
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <div className="mt-5">
                    <h2 className='font-weight-light'>Descripción del producto</h2>
                    <Typography variant='h6' gutterBottom component="div">
                        {listProducts.description}
                    </Typography>
                </div>
            </Container>
        </>
    )
}

export default ItemDetail