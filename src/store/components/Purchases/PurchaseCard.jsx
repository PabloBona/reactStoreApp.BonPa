import React from 'react'
import "./style/purchaseCard.css"

const PurchaseCard = ( {purchase} ) => {

    const datePurchase = new Date(purchase.createdAt)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
   <div>
    
     <article className='purchase'>
        
        <h3>{datePurchase.toLocaleDateString(undefined, options)}</h3>
        <section>
            <ul className='purchase-container__ul'>
                {
                    purchase.cart.products.map(prod => (
                        <li className='purchase__li' key={prod.id}>
                            <h4 className='purchase__h4'> {prod.title} </h4>
                            <span className='purchase__quantity'>{prod.productsInCart.quantity}</span>
                            <span className='purchase__price'> {prod.price} </span>
                        </li>
                    )

                    )
                } 
            </ul>
             
        </section>
    </article>
   </div>
  )
}

export default PurchaseCard