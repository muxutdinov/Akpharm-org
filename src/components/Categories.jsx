import React from 'react'
import Navication from './Sections/Navication'
import {Container} from './CategoriesStyle'
import Navbar from './Navbar'
import CategoriesComp from './CategoriesComp'
const Categories = () => {
    return (
        <>
        <Container>
            <Navbar/>
            Categories
        <CategoriesComp/>
        </Container>
        </>
    )
}

export default Categories
