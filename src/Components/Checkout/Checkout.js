import React, { useContext, useState } from 'react'

//MUI
import {
    Button, Container, FormControl, Grid, TextField, Typography, Card, CardContent,
    List, ListItemText, ListItem, Divider, Breadcrumbs, InputAdornment, Avatar, Box, CircularProgress, Backdrop
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

//Context
import { CartContext } from '../../Context/CartContext'

//Router dom
import { useNavigate, Link } from 'react-router-dom'

//Firebase
import { db } from '../../Utils/Firebase/Firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Checkout = () => {

    const { cart, getItemPrice, getItemQuantity } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const [customer, setCustomer] = useState({
        name: '',
        lastname: '',
        email: '',
        address: '',
        phone: '',
    })

    const onChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            products: cart,
            buyer: { ...customer },
            total: getItemPrice(),
            date: serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection, order)

        consulta
            .then((res) => {
                setLoading(true)
                setTimeout(() =>{
                    setLoading(false)
                    setTimeout(() =>{
                        alert(`Orden ${res.id} creada con exito!`)
                    }, 500)
                }, 1000)
            })
            .catch(error => {
                console.log(error)
            })
    }

    //Contador regresivo
    const [timeLeft, setTimeLeft] = useState(5);
    const navigate = useNavigate();
    timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    if (cart.length === 0) {
        setTimeout(() => {
            navigate("/")
        }, 5000)
        return (
            <>
                <Container maxWidth="lg" sx={{ mt: 20, mb: 20 }}>
                    <Card sx={{ width: '60%', mx: 'auto', py: 5 }}>
                        <CardContent>
                            <Typography variant="h5" textAlign={'center'}>
                                ¡Uy! algo salió mal...
                            </Typography>
                            <Typography variant="h5" textAlign={'center'} sx={{ mt: 5 }} gutterBottom>
                                Redirigiendo a la página principal:
                            </Typography>
                            <Typography variant="h5" textAlign={'center'}>
                                {timeLeft}
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </>
        )
    }

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                {/* Title, breadcrumb */}
                <h2 className='font-weight-light'>Checkout</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/">
                        Inicio
                    </Link>
                    <Link to="/carrito">
                        Carrito
                    </Link>
                    <Typography color="text.primary">Checkout</Typography>
                </Breadcrumbs>

                <Grid container spacing={4}>
                    <Grid item xl={8} lg={8} md={7} sm={12} xs={12} sx={{ mt: 3 }}>
                        <Box sx={{ mb: 5 }}>
                            <Avatar sx={{ bgcolor: '#2699FB', mx: 'auto' }}>1</Avatar>
                            <Typography variant='h6' textAlign={'center'} sx={{ fontWeight: 'bold' }}>Datos de envio</Typography>
                        </Box>
                        <form onSubmit={handleSubmit} id="checkout" className='row'>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <TextField
                                        name='name'
                                        value={customer.name}
                                        onChange={onChange}
                                        label="Nombre(s)"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard" />
                                </FormControl>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <TextField
                                        name='lastname'
                                        value={customer.lastname}
                                        onChange={onChange}
                                        label="Apellidos"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <GroupIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </FormControl>
                            </div>


                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <TextField
                                        name='email'
                                        value={customer.email}
                                        onChange={onChange}
                                        label="Correo electrónico"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </FormControl>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <TextField
                                        name='phone'
                                        value={customer.phone}
                                        onChange={onChange}
                                        label="Teléfono"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </FormControl>
                            </div>

                            <div className="col-12">
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <TextField
                                        name='address'
                                        value={customer.address}
                                        onChange={onChange}
                                        label="Dirección"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HomeIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </FormControl>
                            </div>
                        </form>
                    </Grid>

                    {/* Resumen de compra */}
                    <Grid item xl={4} lg={4} md={5} sm={12} xs={12} sx={{ mt: 3 }}>
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
                                <Button type='submit' variant='contained' form="checkout" sx={{ width: '100%', height: '50px' }}>Finalizar compra</Button>
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
                </Grid>
            </Container>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Checkout