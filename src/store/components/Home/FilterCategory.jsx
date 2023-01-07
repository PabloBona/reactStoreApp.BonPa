import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../slices/products.slice'
import "./styles/filtercategory.css"

const FilterCategory = ( {setInputValue} ) => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(getProductsByCategory(id))
        setInputValue("")
    }

    const handleAllProducts = () => {
        dispatch(getAllProducts())
        setInputValue("")
    }

    return (
        <section className='category bx-Filter'>
            <h3 className='category__title'>Categories</h3>
            <ul className='category__ul'>
                <li className='category__li' onClick={handleAllProducts}>All Products</li>
                {
                    categories?.map(category => (
                        <li onClick={() => handleClick(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FilterCategory