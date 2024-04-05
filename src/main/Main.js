import React from 'react'
import './Main.css'
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Iphone from '../../src/assent/images/iphone.svg'

function Main() {
  return (
    <main>
      <section className='logo'>
        <div className="container">
          <div className="logo_box">
            <div className="logo_box_text">
            <FaApple />
            <span>iPhone 14 Series</span>
            <h1>Up to 10% off Voucher</h1>
            <p>Shop Now <FaArrowRight /></p>
            </div>
            <img src={Iphone} alt="" />
          </div>
        </div>
      </section>
      
    </main>
  )
}
export default Main
