//DOM
import { Routes, Route } from 'react-router-dom'

//Components
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js'
import Cart from './Components/Cart/Cart.js'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<ItemListContainer />}></Route>
                <Route path='/categorias/:category' element={<ItemListContainer />}></Route>
                <Route path='/producto/:id' element={<ItemDetailContainer />}></Route>
                <Route path='/carrito' element={<Cart />}></Route>
            </Routes>
            <Footer />

        </>
    )
}

export default App