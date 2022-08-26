import React, { useContext, useState } from 'react'

//CSS
import './Cart.css'

//IMG
import shopping_cart from '../../Assets/Img/shopping-cart-193.png'

//Router doom
import { Link } from 'react-router-dom'

//MUI
import { Container, Breadcrumbs, Typography, Grid, Divider, List, ListItem, ListItemText, Button, TextField, Backdrop, CircularProgress } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';

import { CartContext } from '../../Context/CartContext';

const Cart = () => {

    const { cart, deleteItem, addItem, isInCart, removeItem, getItemPrice, getItemQuantity, cantidad, emptyCart } = useContext(CartContext)

    const [loading, setLoading] = useState(false);

    return (
        <>
            {cart.length > 0 ?

                <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                    <h2 className='font-weight-light'>Carrito</h2>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">
                            Inicio
                        </Link>
                        <Typography color="text.primary">Carrito</Typography>
                    </Breadcrumbs>

                    {/* Grid container */}
                    <Grid container columnSpacing={4}>
                        {/* Articulos en carrito */}
                        <Grid item xl={8} lg={8} md={7} sm={12} xs={12} sx={{ mt: 5 }}>
                            {cart.map(prod => (
                                <div key={prod.id} className="prod_cart">
                                    <div className="d-flex justify-content-start prod_cart_flex">
                                        {/* Imagen del producto */}
                                        <div className="mr-3 text-center">
                                            <Link to={`/producto/${prod.id}`}>
                                                <img className='prod_cart_img' src={prod.image} width="100" alt={prod.title} />
                                            </Link>
                                        </div>

                                        {/* Información del producto */}
                                        <div className='prod-cart-info'>
                                            {/* nombre producto */}
                                            <Typography variant='h6' className='prod_cart_name' gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {prod.title}
                                            </Typography>

                                            {/* Precio del produco */}
                                            <div className='my-auto'>
                                                <Typography variant='subtitle1' className='prod_cart_category'
                                                    sx={{ fontWeight: 'bold', color: 'green' }}
                                                >
                                                    ${prod.price}.00
                                                </Typography>
                                            </div>

                                            {/* Cantidad */}
                                            <div className='d-flex justify-content-start flex-wrap mt-2 prod_cart_qty'>
                                                <div className='my-auto mr-2'>
                                                    <Typography variant="subtitle1" component="div">
                                                        Cantidad:
                                                    </Typography>
                                                </div>
                                                <div className='border' style={{ width: '170px', borderRadius: '5px' }}>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <IconButton
                                                                disabled={prod.cantidad === 1}
                                                                color="primary"
                                                                onClick={() => {
                                                                    setLoading(true)
                                                                    setTimeout(() => {
                                                                        isInCart(prod.id)
                                                                        removeItem(prod, cantidad)
                                                                        setLoading(false)
                                                                    }, 1200)
                                                                }}
                                                            >
                                                                <RemoveIcon />
                                                            </IconButton>
                                                        </div>

                                                        <div className='my-auto'>
                                                            {prod.cantidad}
                                                        </div>

                                                        <div>
                                                            <IconButton
                                                                disabled={prod.cantidad === prod.stock || prod.stock === 0}
                                                                color="primary"
                                                                onClick={() => {
                                                                    setLoading(true)
                                                                    setTimeout(() => {
                                                                        isInCart(prod.id)
                                                                        addItem(prod, cantidad)
                                                                        setLoading(false)
                                                                    }, 1200)
                                                                }}
                                                            >
                                                                <AddIcon />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Fin cantidad */}

                                            {/* botón paraa eliminar del carrito */}
                                            <Button
                                                color="error"
                                                size="small"
                                                onClick={() => {
                                                    deleteItem(prod.id)
                                                }}
                                                sx={{ mt: 2 }}
                                            >
                                                <DeleteIcon sx={{ mr: 1 }} />Eliminar del carrito
                                            </Button>

                                        </div>
                                        {/* Fin informacion del producto */}
                                    </div>
                                    <Divider sx={{ my: 4 }} />
                                </div>
                            ))}
                            {/* button para vaciar carrito */}
                            <Button variant="contained" onClick={() => {
                                emptyCart()
                                window.scrollTo({
                                    top: 0,
                                })
                            }}>Vaciar carrito</Button>
                            
                        </Grid>
                        {/* Fin Articulos en carrito */}

                        {/* Orden */}
                        <Grid item xl={4} lg={4} md={5} sm={12} xs={12} sx={{ mt: 5 }}>
                            {/* border */}
                            <div className="border p-3" style={{ borderRadius: '5px', boxShadow: '0 2px 4px 2px rgb(0 0 0 / 20%)' }}>
                                <h4 className="text-center text-sm-center text-md-left">Tu orden</h4>
                                {/* Lista de articulos */}
                                <List disablePadding>
                                    {/* Envio */}
                                    <ListItem className="px-0 py-0">
                                        <ListItemText primary={"Articulos (" + getItemQuantity() + ")"} />
                                        <Typography className="text-success" variant="body2">{"$" + getItemPrice() + ".00"}</Typography>
                                    </ListItem>

                                    {/* Envio */}
                                    <ListItem className="px-0 py-0">
                                        <ListItemText primary="Envío" />
                                        <Typography className="text-success" variant="body2">Gratis</Typography>
                                    </ListItem>

                                    <Divider sx={{ my: 3 }} />

                                    {/* Total */}
                                    <ListItem className="px-0 py-0">
                                        <ListItemText primary="Total + envío" />
                                        <Typography variant="subtitle1" className="font-weight-bold">
                                            ${getItemPrice()}.00
                                        </Typography>
                                    </ListItem>
                                </List>
                                {/* fin Lista de articulos */}

                                {/* Botón finalizar compra */}
                                <div className="mt-3">
                                    <Link to={"/checkout"} className="text-decoration-none">
                                        <Button variant='contained' sx={{ width: '100%', height: '50px' }}>Continuar con la compra</Button>
                                    </Link>
                                </div>

                                {/* Sección para aplicar cupón */}
                                <div className="mt-3">
                                    <div>
                                        <a className="d-flex justify-content-between" data-toggle="collapse" href="#Cart-collapse" aria-expanded="false"
                                            aria-controls="Cart-collapse" style={{ color: '#004876' }}>
                                            Aplicar cupón
                                            <span><ArrowDropDownIcon /></span>
                                        </a>

                                        <div className="collapse" id="Cart-collapse">
                                            <div className="mt-3">
                                                <div className="d-flex mb-0">
                                                    <TextField size='small' label="Cupón" sx={{ mr: 2 }} variant="outlined" />
                                                    <Button variant="contained">Aplicar</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Fin seccion para aplicar cupón */}

                                <Divider sx={{ my: 2 }} />

                                <Typography variant='body2' sx={{ fontSize: '13px' }}>
                                    El monto total que se muestra es el precio final con IVA y costos de envió incluido.
                                </Typography>

                            </div>
                            {/* Fin border */}

                        </Grid>
                        {/* Fin Orden */}
                    </Grid>
                    {/* Fin grid container */}
                </Container>

                :

                <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={shopping_cart} width="35%" alt="cart-empty" className='img_no_events cart-empty' />
                        <Typography variant="h4" sx={{ fontWeight: '900' }} gutterBottom>
                            Tu carrito está actualmente vacío!
                        </Typography>
                        <Typography variant='body1'>
                            Antes de finalizar su compra debe añadir algunos productos al carrito de compras.
                        </Typography>
                        <Typography variant="body1">
                            Encontrará muchos productos interesantes en nuestra página de tienda.
                        </Typography>
                        <Link to="/" className='text-decoration-none'>
                            <Button variant="contained" sx={{ mt: 2 }}>Regresar a la tienda</Button>
                        </Link>
                    </div>
                </Container>
            }

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Cart