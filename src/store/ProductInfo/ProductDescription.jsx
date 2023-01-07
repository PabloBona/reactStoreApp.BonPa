import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getConfig from '../../utils/getConfig'
import { getUserCart } from '../slices/cart.slice'
import "./styles/productDescription.css"

const ProductDescription = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
            setCounter(counter +1)
    }

    const handleMinus = () => {
        if (counter -1 >0){
            setCounter (counter -1)
        }
    }

    const dispatch = useDispatch()

    const handleCart = () =>{
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
        const data = {
            id: product.id ,
            quantity: counter
        }
        axios.post(URL, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getUserCart())
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='product-description'>
            <article className='product-info'>
            <h2 className='product-info__title'> {product?.title} </h2>
            <p className='product-info__description'> {product?.description}</p>
            <footer className='product-info__footer'>
                <div className='product-info__price-container'>
                    <h3 className='product-info__price-label'>Price</h3>
                    <span className='product-info__price-number'>{product?.price}</span>
                </div>
                <div className='product-info__quantity-container'>
                    <h3 className='product-info__quantity-label'>Quantity</h3>
                    <div className='counter'>
                        <button onClick={handleMinus} className='counter__minus'>-</button>
                        <div className='counter__number'> {counter} </div>
                        <button onClick={handlePlus} className='counter__plus'>+</button>
                    </div>
                </div>
                <div>
                    <button onClick={handleCart} className='product-info__btn'>Add to Cart <i className="product-info__icon fa-solid fa-cart-shopping"></i></button>
                </div>
            </footer>
        </article>
        </div>
    )
}
export default ProductDescription