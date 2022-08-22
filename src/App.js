//DOM
import { Routes, Route } from 'react-router-dom'

//MUI
import { createTheme, ThemeProvider } from '@mui/material'

//provider
import MyProvider from './Context/CartContext.js'

//Components
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js'
import Cart from './Components/Cart/Cart.js'
import Checkout from './Components/Checkout/Checkout.js'

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito',
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <MyProvider>
                    <Header />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />}></Route>
                        <Route path='/categorias/:category' element={<ItemListContainer />}></Route>
                        <Route path='/producto/:id' element={<ItemDetailContainer />}></Route>
                        <Route path='/carrito' element={<Cart />}></Route>
                        <Route path='/checkout' element={<Checkout />}></Route>
                    </Routes>
                    <Footer />
                </MyProvider>
            </ThemeProvider>
        </>
    )
}

export default App