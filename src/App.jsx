import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Header/Header'
import Body from './Component/Body/Body'
import Cart from './Component/Cart/Cart'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Body/>
      <Cart/>
    </div>
  )
}

export default App

