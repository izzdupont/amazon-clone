import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [ { basket }, dispatch] = useStateValue();

    return (
    <div className='header'>
         {/* Amazon logo here*/}
         <Link to="/">
            <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
         </Link>
        
        <div className="header__search">
            <input className="header__searchInput" type="text" />
            {/* Search Logo */}
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
             {/* Sign in*/}
            <Link to='./login'>
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div> 
            </Link>

             {/* Return & order */}
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>

             {/* Prime */}
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

             {/* Your basket */}
             <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        { basket?.length } {/* ? is optional chaining */}
                    </span>
                </div>
            </Link>
        </div>

    </div>
  )
} 

export default Header