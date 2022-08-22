import React, { useEffect, useState } from 'react'

import { useParams, NavLink } from 'react-router-dom'

//CSS
import './ItemListContainer.css'

//MUI
import { Button, ButtonGroup, CircularProgress, Container, Menu, MenuItem, MenuList, ListItemText, ListItemIcon } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListIcon from '@mui/icons-material/List';

//Components
import { customFetch } from '../../Utils/customFetch';
import ItemList from '../ItemList/ItemList';

//Data
import { productsData } from '../../Data/productsData';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams()

    useEffect(() => {
        setLoading(false)
        customFetch(productsData).then(data => {
            if (category) {
                setLoading(true)
                setListProducts(data.filter(prod => prod.category === category))
            }
            else {
                setLoading(true)
                setListProducts(data)
            }
        })
    }, [category])

    //Open menu para filtrar
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    //Filtrar por mayor precio
    function HighPrice() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.price < b.price ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }

    //Filtrar por menor precio
    function LowPrice() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.price > b.price ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }

    //Nombre A - Z
    function HighName() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.title > b.title ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }

    //Nombre Z - A
    function LowName() {
        const sorted = [...listProducts].sort((a, b) => {
            return a.title < b.title ? 1 : -1
        })
        setListProducts(sorted);
        setAnchorEl(null);
    }


    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                {/* Categorias */}
                <div className="text-center category__">
                    <h3 className='font-weight-light mb-0'>Categorias</h3>
                    <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ flexWrap: 'wrap', mt: 2 }}>
                        <Button LinkComponent={NavLink} to="/">Todo</Button>
                        <Button LinkComponent={NavLink} to="/categorias/alimento">Alimentos</Button>
                        <Button LinkComponent={NavLink} to="/categorias/accesorios">Accesorios</Button>
                    </ButtonGroup>
                </div>

                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button onClick={handleMenu}>Filtrar por <ListIcon sx={{ ml: 1.2 }} /></Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuList>
                            {/* mayor precio */}
                            <MenuItem onClick={HighPrice}>
                                <ListItemIcon>
                                    <ArrowUpwardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Mayor precio</ListItemText>
                            </MenuItem>

                            {/* Menor precio */}
                            <MenuItem onClick={LowPrice}>
                                <ListItemIcon>
                                    <ArrowDownwardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Menor precio</ListItemText>
                            </MenuItem>

                            {/* Nombre A - Z */}
                            <MenuItem onClick={HighName}>
                                <ListItemIcon>
                                    <ArrowUpwardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Nombre A - Z</ListItemText>
                            </MenuItem>

                            {/* Nombre Z - A */}
                            <MenuItem onClick={LowName}>
                                <ListItemIcon>
                                    <ArrowDownwardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Nombre Z - A</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className="mt-3">
                    {
                        loading ? <ItemList listProducts={listProducts} />
                            :
                            <div className="text-center my-5">
                                <CircularProgress />
                            </div>
                    }
                </div>
            </Container>
        </>
    )
}

export default ItemListContainer