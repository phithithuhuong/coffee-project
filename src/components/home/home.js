import React from 'react'
import Navbar from '../layouts/Navbar'
import { Outlet } from 'react-router-dom'
import { Categories } from '../../pages/categories/categories'
import Product from '../layouts/products/product'
import Footer from '../layouts/Footer'
import TeaText from '../../pages/tea-text'
import { View } from '../../pages/views-coffee/view'
import Carousels from '../layouts/carousels'
export function Home() {
    return (
        <>
        <Navbar/>
        <Carousels/>
        <Categories/>
        <Product/>
        <TeaText/>
        <View/>
        <Footer/>
            
        </>
    )
}
