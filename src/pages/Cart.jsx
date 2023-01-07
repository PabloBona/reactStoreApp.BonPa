import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../store/components/Cart/CartProduct'
import { getUserCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import "./styles/cart.css"

const Cart = () => {
    
    const cartProducts = useSelector(state => state.cart)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUserCart())
      }, [])

    const handleChekout = () =>{
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        const data = {
            street: "Green St. 1456" , 
            colony:  "Southwest" ,
            zipCode: 12345 , 
            city: "USA" ,
            references: "Some references"
        }
        axios.post(URL, data, getConfig())
            .then(res =>{
                console.log(res.data)
                dispatch (getUserCart())
            } )
            .catch(err => console.log(err))
    }
     
    return (
    <section className='cart'>
        <div>
        <h2 >Shopping Cart</h2>
        <div>
            {
                cartProducts?.map(product => (
                    <CartProduct 
                    key={product.id}
                    product={product}
                    />
                    ))
                }
        </div>
        </div>
        <footer className='checkout-section' >
            <div className='cart__total'>
            <span>Total:</span>
            <p className='cart__price'>
                {
                    cartProducts ?
                    cartProducts.reduce((acc, cv) =>{
                        return cv.price * cv.productsInCart.quantity + acc
                    }, 0)
                    :
                    0
                }
            </p>
            </div>
            <button className='cart__btn' onClick={handleChekout} >Checkout</button>
        </footer>
         
    </section>
)
}

export default Cart