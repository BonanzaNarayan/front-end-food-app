// import React, { useState } from 'react'
import { useRef } from 'react'
import './Header.css'
import cartImg from '../../assets/shopping-bag.png'

function Header() {

    const menuRef = useRef()
    const menuBtn = ()=>{
        menuRef.current.style.top = "0"
    }
    const close = ()=>{
        menuRef.current.style.top = "-50vh"
    }

  return (
    <div className='header'>
        <div className="menuBtn" onClick={menuBtn}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="logo">
            <a href="/"><h1>Savannah Foodstop</h1></a>
        </div>
        <div className="nav" ref={menuRef}>
            <h1 id='close' onClick={close}>X</h1>
            <ul>
                <li><a href="/" className='active'>Home</a></li>
                <li><a href="/offer">Offer</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/about">About</a></li>
                
            </ul>
        </div>
            <a className="cart" href="/cart">
                <img src={cartImg} alt="" />
                <p>3</p>
            </a>
    </div>
  )
}

export default Header