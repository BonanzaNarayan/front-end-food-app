import React from 'react'
import './Home.css'
import banner from '../../assets/burger.png'
import addbasket from '../../assets/add-to-basket.png'
import playVid from '../../assets/play.png'
import fastDevilery from '../../assets/motorbike.png'
import freshfood from '../../assets/recycling.png'
import freedev from '../../assets/box.png'
import user from '../../assets/user.png'
import offerBurger from '../../assets/offerBurger.png'
import arrow from '../../assets/right-chevron.png'
import pizza from '../../assets/pizza.png'
import friedPotato from '../../assets/fried-potatoes.png'
import menu_data from '../../assets/menu'
import hero1 from '../../assets/hero1.jpeg'
import hero2 from '../../assets/hero2.jpeg'
import hero3 from '../../assets/hero3.jpeg'


function Home() {
  return (
    <div>
        <div className="banner">
          <div className="left">
            <div className="title">
              <h1>All fast Food is</h1>
              <h1>Available at Foodle</h1>
            </div>
            <div className="conv">
              <img src={user} alt="" />
              <p>We are Just a Click Away When You Crave For Delicious fast Food</p>
            </div>
            <div className="buttons">
              <button><img src={addbasket} alt="icon" />Buy Now</button>
              <button><img src={playVid} alt="icon" />How To Order</button>
            </div>
          </div>
          <div className="right">
            <img src={banner} alt="img" />
          </div>
        </div>
          <div className="bottom">

            <div className='card'>
              <img src={fastDevilery} alt="img" />
              <div className="context">
                <h2>Fast Delivery</h2>
                <p>The food will be deliverd to your home within 1-2 hours of your ordering.</p>
              </div>
            </div>

            <div className='card'>
              <img src={freshfood} alt="img" />
              <div className="context">
                <h2>Fresh Food</h2>
                <p>Your food will be deliverd 100% Fresh to your home. We do not deliver stale food.</p>
              </div>
            </div>

            <div className='card'>
              <img src={freedev} alt="img" />
              <div className="context">
                <h2>Free Delivery</h2>
                <p>Your food Delivery is Absolutely Free. No cost just Order and Enjoy.</p>
              </div>
            </div>
          </div>
    <div className="offers-title">
      <div className="left-offer">
        <h1>Best <span>Deliverd</span> Categories</h1>
      </div>
      <div className="right-offer">
        <p>Here Are Some of Our Best Distributed Categories. If You Want You Can Order From Here.</p>
      </div>
    </div>
      <div className="offers">

        <div className="offer">
          <img src={offerBurger} alt="" />
          <div className="text">
            <h1>Chicken Burger</h1>
            <a href="">Order Now <img src={arrow} alt="" /></a>
          </div>
        </div>

        <div className="offer">
          <img src={pizza} alt="" />
          <div className="text">
            <h1>Pizza</h1>
            <a href="">Order Now <img src={arrow} alt="" /></a>
          </div>
        </div>

        <div className="offer">
          <img src={friedPotato} alt="" />
          <div className="text">
            <h1>Fries</h1>
            <a href="">Order Now <img src={arrow} alt="" /></a>
          </div>
        </div>

        <div className="offer">
          <img src={banner} alt="" />
          <div className="text">
            <h1>Fries and Burger</h1>
            <a href="">Order Now <img src={arrow} alt="" /></a>
          </div>
        </div>

      </div>

      <div className="menu">
        <div className="menu-title">
          <div className="menu-title-left">
            <h1>Our <span>Regular</span> Menu</h1>
            <p>These Are Our Regular Menus. You Can Order Anything You Like.</p>
          </div>
          <div className="menu-title-right">
            <a href="/menu">See All</a>
          </div>
        </div>

        <div className="menu-container">
          {menu_data.map((menu,index)=>{
                return <div key={index} className='menu-format'>
                  <img src={menu.f_img} alt="" className='food-pic'/>
                    <h1>{menu.f_name}</h1>
                    <div className="rate">
                      <img src={menu.f_rate} alt="" />
                      <p>{menu.f_rateNum}</p>
                    </div>
                    <div className="price-buy">
                      <p>{menu.f_price}</p>
                      <button>{menu.f_button}</button>
                    </div> 
                </div>
            })}
        </div>
      </div>

      <div className="hero">
        <div className="left-hero">
          <img src={hero1} alt="" />
        </div>
        <div className="right-hero">
          <img src={hero2} alt="" />
          <img src={hero3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home