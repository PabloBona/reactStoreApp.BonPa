import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import getConfig from '../../../utils/getConfig'
import { getUserCart } from '../../slices/cart.slice'
import './Styles/cartProduct.css'
const CartProduct = ({product}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => console.log(err))
    }
     
    return (
    <article className='cart-product cart-products-list' >
        <header>
            <div className='cartproduct__icon'>
            <h3 className='cartproduct__grey'>{product.brand}</h3>
            </div>
            <h3 className='cartproduct__title'>{product.title}</h3>
        </header>
        <button  className='trash-can' onClick={handleDelete} >
        <i className="fa-solid fa-trash-can"></i>
        </button>
        <div className='cartproduct__unit'>{product.productsInCart.quantity}</div>
        <div className='cartproduct__pricecontainer'>
            <p>Unit Price:</p>
            <span className='cartproduct__price'>{product.price}</span>
        </div>
            <hr className='cartproduct__hr'/>
    </article>
)
}
export default CartProduct