import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
         {/* Amazon logo here*/}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            {/* Search Logo */}
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
             {/* Sign in*/}
            <div className="header__option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>

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
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                    0
                </span>
            </div>
        </div>

    </div>
  )
}

export default Header