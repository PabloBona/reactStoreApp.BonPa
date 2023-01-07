import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardProduct.css'
import getConfig from '../../../utils/getConfig'
import { getUserCart } from '../../slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'


const CardProduct = ({product}) => {

    const navigate = useNavigate ()
    const dispatch = useDispatch()
    const cart = useSelector(state =>state.cart)
const handleClick = () => {
        navigate(`/product/${product.id}`)
}
     
const handleBtnClick = e =>{
        e.stopPropagation()
        const URL ='https://e-commerce-api.academlo.tech/api/v1/cart'
        
        const data = {
            id:product.id,
            quantity:1,
        }

        axios.post(URL, data, getConfig())
            .then(res =>{
                console.log(res.data)
                dispatch(getUserCart())
            }) 
            .catch(err => {
                if(err.response.statusText == "Bad Request"){
                    //update
                    const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'
                    const prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity
                    const data = {
                      id: product.id,
                      newQuantity: prevQuantity + 1
                    }
                    axios.patch(URLPatch, data, getConfig())
                      .then(res => console.log(res.data))
                      .catch(err =>console.log(err))
                }  
            })
        }
    return (
        <article className='product'  onClick={handleClick} >
            <header className='product_header' >
                <img  className='product_img' src={product.productImgs[0]} alt="" />
                <img  className='product_img' src={product.productImgs[1]} alt="" />
            </header>
            <section className='product_body' >
                <h3 className='product_name' >{product.title}</h3>
                <article className='product_price-contianer' >
                    <span className='product_price-label' >Price</span>
                    <h4 className='product_price-number' >${product.price}</h4>
                </article>
                <button  onClick={handleBtnClick } className='product_btn' ><i className="fa-solid fa-cart-plus"></i></button>
            </section>
        </article>
        )
}

export default CardProduct