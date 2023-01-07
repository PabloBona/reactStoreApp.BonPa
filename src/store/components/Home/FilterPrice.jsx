import React from 'react'
import "./styles/filterprice.css"

const FilterPrice = ({ setInputPrice}) => {
    const handleSubmit = e => {
        e.preventDefault()
        const inputFrom = +e.target.from.value
        const inputTo = +e.target.to.value
         if(inputFrom && inputTo){
            setInputPrice({
                from: inputFrom,
                to: inputTo
            })
         } else if (!inputFrom && inputTo){
            setInputPrice({
                from: 0 ,
                to: inputTo
            })
         } else if (inputFrom && inputTo){
            setInputPrice({
                from: inputFrom,
                to: Infinity
            })
         } else {
            setInputPrice( {
                from: 0,
                to: Infinity
            } )
         }
    }
  return (
   <section className='price '>
    <h3 className='price__title'>Price</h3>
    <hr className='price__hr'/>
    <form className='price__formContainer' onSubmit={handleSubmit}>
        <div className='price__from' >
            <label className='price__label' htmlFor="from">From</label> <br />
            <input className='price__input' type="number" id='from' />
        </div>
        <div className='price__to'>
            <label className='price__label' htmlFor="to">To</label> <br />
            <input className='price__input' type="number" id='to' />
        </div>
        <button className='price__btn'>Filter Price</button>
    </form>
   </section>
  )
}
export default FilterPrice
// import React from 'react'

// const FilterPrice = ( {setInputPrice} ) => {

//     const handleSubmit = e => {
//         e.preventDefault()
//         const inputFrom = +e.target.from.value
//         const inputTo = +e.target.to.value
//         if(inputFrom && inputTo){
//           setInputPrice({
//             from: inputFrom,
//             to: inputTo
//           })
//         } else if (!inputFrom && inputTo) {
//           setInputPrice({
//             from: 0,
//             to: inputTo
//           })
//         } else if (inputFrom && !inputTo) {
//           setInputPrice({
//             from: inputFrom,
//             to: Infinity
//           })
//         }
//       }
//   return (
//     <section>   
//         <h2>Price</h2>
//         <form onSubmit={handleSubmit}>
//             <div>  
//                 <label htmlFor="from">From</label>
//                 <input type="text" id="from" />
//             </div>
//             <div>  
//                 <label htmlFor="to">To</label>
//                 <input type="text" id="to" />
//             </div>
//             <button>Apply</button>
//         </form>
//     </section>
//   )
// }

// export default FilterPrice