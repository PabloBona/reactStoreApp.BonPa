import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../store/components/Home/CardProduct'
import FilterCategory from '../store/components/Home/FilterCategory'
import FilterPrice from '../store/components/Home/FilterPrice'
import { ShowFilterPrice } from '../store/slices/ShowFilterPrice'
import "./styles/home.css"

const Home = () => {
    const [productsFilter, setproductsFilter] = useState()
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(true)
    
    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })
    const products = useSelector(state => state.products)
    useEffect(() => {
        if (products) {
            setproductsFilter(products)
        }
    }, [products])
    const handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase().trim();
        const filter = products?.filter((prod) =>
            prod.title.toLowerCase().includes(inputValue)
        );
        setproductsFilter(filter)
        setInputValue(e.target.value)
    };
    const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to
    return (
        <div className='home '>
            <form className='input'>
            <input className='home__input' placeholder="What Are you Looking for ? " value={inputValue} onChange={handleChange} type="text" />
            <i className='bx bx-search'></i>
            </form>
            <button onClick={ShowFilterPrice} className='bx-Filter'><i className='bx bx-filter-alt'><p className='p-Filter'> Filters </p></i></button>
            <FilterCategory
            setInputValue={setInputValue}
            />
            <FilterPrice
                setInputPrice={setInputPrice}
            />
            <div className='products-container'>
                {
                    productsFilter?.filter(filterCallBack).length !== 0 ?
                        productsFilter?.filter(filterCallBack).map(product => (
                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                        :
                        <h1>Non exist products to this filter</h1>
                }
            </div>
        <footer className='footer__social'>
            <div className="footer__container">
            <div className="social-networks">
                <div className="social-a">
                <a href="https://www.instagram.com/academlohq/"><i className='bx bxl-instagram'></i></a>
                <a target={'blank'} href="https://www.linkedin.com/in/pablo-bonasera-142327257/"><i className='bx bxl-linkedin'></i></a>
                </div>
                 <p>Made In Academlo 2023</p>
            </div>
            </div>
            
        </footer>
        </div>
    )
}
export default Home