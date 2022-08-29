import { createContext, useState } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(1)

    //Verificar si el producto a agregar ya existe en el carrito
    const isInCart = (title) => {
        return cart.some(param => param.title === title)
    }

    //
    const addItem = (item, cantidad) => {
        const newItem = {
            ...item,
            cantidad
        }

        if (isInCart(newItem.title)) {
            const findProduct = cart.find(param => param.title === newItem.title)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].cantidad += cantidad
            setCart(auxArray)
        }
        else {
            setCart([...cart, newItem])
        }
    }

    const removeItem = (item, cantidad) => {
        const newItem = {
            ...item,
            cantidad
        }

        if (isInCart(newItem.title)) {
            const findProduct = cart.find(param => param.title === newItem.title)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].cantidad -= cantidad
            setCart(auxArray)
        }
        else {
            setCart([...cart, newItem])
        }
    }

    //Vacía el carrito
    const emptyCart = () => {
        return setCart([])
    }

    //Borra un producto del carrito
    const deleteItem = (title) => {
        return setCart(cart.filter(param => param.title !== title))
    }

    //Obtener la cantidad de unidades del carrito
    const getItemQuantity = () => {
        return cart.reduce((acc, param) => acc += param.cantidad, 0)
    }

    //obtiene el precio total de la compra
    const getItemPrice = () => {
        return cart.reduce((acc, param) => acc += param.cantidad * param.price, 0)
    }

    return (
        <Provider value={{ cart, isInCart, emptyCart, deleteItem, getItemQuantity, getItemPrice, addItem, removeItem, cantidad, setCantidad }}>
            {children}
        </Provider>
    )
}

export default MyProvider