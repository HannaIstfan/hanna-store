import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from'../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';


function Navbar() {
  const [menu,setMenu] = useState('shop');
  const {getTotalcartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('mens')}}><Link to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('womens')}}><Link to="womens">Women</Link>{menu==='womens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
      <a href='/login'><button>Login</button></a>
      <a href='/cart'><img src={cart_icon } /></a>
      <div className='nav-cart-count'>{getTotalcartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
