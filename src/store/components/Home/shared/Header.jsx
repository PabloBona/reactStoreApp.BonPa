import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to='/'> <img className='logo' src="./logo.jpg" alt="" /></Link>
            </h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link" to='/login'>
                            Login
                        </Link>
                         
                    </li>
                    <li className="header__item">
                        <Link className="header__link" to='/purchases'>
                            Purchases
                        </Link>
                         
                    </li>
                    <li className="header__item">
                        <Link className="header__link" to='/cart'>
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
//     <header>
//         <nav>
//             <ul>
//                 <li><Link to='/'>e-commerce</Link></li>
//                 <li><Link to='/login'>Login</Link></li>
//                 <li><Link to='/cart'>Cart</Link></li>
//                 <li><Link to='/purchases'>Purchases</Link></li>
//             </ul>
//         </nav>
//     </header>
// )
// }

export default Header