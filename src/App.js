import { useEffect } from 'react'

//DOM
import { Routes, Route, useLocation } from 'react-router-dom'

//MUI
import { createTheme, ThemeProvider } from '@mui/material'

//provider
import MyProvider from './Context/CartContext.js'

//Firebase
import '../src/Utils/Firebase/Firebase.js'

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

//Siempre top al navegar
function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

function App() {
    useScrollToTop();
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