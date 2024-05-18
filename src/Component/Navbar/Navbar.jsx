import React from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
     <FaBars className='icon'/>
      <h1 className='kfc'>KFC</h1>
        <div className='deliverry'>
          <img src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png" alt="" />
          <h4>DELIVERY</h4>
        </div>
        <div className='pickup'>
          <img src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png" alt="" />
          <h4>PICKUP</h4>
        </div>
        <button className='btn'>LOGIN</button>
    </div>
  )
}

export default Navbar
