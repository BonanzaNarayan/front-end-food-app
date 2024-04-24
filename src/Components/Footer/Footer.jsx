import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='email-socials'>
            <div className="email">
                <h1>Foodish</h1>
                <p>Continue Foodish 2023 all rights reserved</p>
            </div>
            <div className="socials">
                <div className="socials-title">
                    <h1>Follow Us On</h1>
                </div>
                <div className="socials-icons">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>    
            </div>
        </div>

        <div className='menu-nav'>
            <ul>
                <h1>Menu</h1>
                <li><a href="/">Home</a></li>
                <li><a href="/">Offers</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">About Us</a></li>
            </ul>
        </div>
        <div className='infor'>
            <h1>Information</h1>
            <ul>
                <li>Menu</li>
                <li>Quality</li>
                <li>Fast Delivery</li>
                <li>MAke a choice</li>
                <li>Salad With Vegetable</li>
                <li>Subscribe</li>
            </ul>
        </div>
        <div className='contact'>
            <h1>Contact</h1>
            <ul>
                <li>+123 475 294</li>
                <li>Explore</li>
                <li>info@foodish.com</li>
                <li>1245, New York, USA</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer