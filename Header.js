import React from 'react'
import "./Header.css";
import img from './images/img.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="header">
            <div className="header_first">
                <img src={img} alt=""
                />
                <div className="header_first1">
                    <span style={{ fontSize: "11px", color: "white", fontStyle: "italic" }}>Explore</span>
                    <span style={{ color: "yellow", fontSize: "11px", fontStyle: "italic" }}>PLus</span>
                </div>
            </div>
            <div className="header_second">
                <input placeholder="search for products,brands and more" type="text" />
                <SearchIcon />
            </div>
            <div className="header_third">
                <button>Login</button>
            </div>
            <div className="header_fourth">
                <span>More</span>
                <ExpandMoreIcon />
            </div>
            <div className="header_fifth">
                <ShoppingCartIcon />
                <p>Cart</p>
            </div>
            
        </div>
            
        
    )
}

export default Header;