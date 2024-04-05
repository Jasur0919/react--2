import React from 'react'
import './Header.css'
import { FiSearch } from "react-icons/fi";
import { LuHeartHandshake } from "react-icons/lu";
import { GrCart } from "react-icons/gr";

function Header() {
    const Pages = ["Home", "Conatct", "About", "Sign up"]
  return (

    <header>
        <div className="container">
          <div className="header_box">
          <h2>Exclusive</h2>
            <ul className='collection'>
                {
                    Pages.map((value,index) => {
                        return <li className='item'>{value}</li>
                    })
                }

            </ul>
            <div className="header_product">
                <div className="header_input">
                    <input className='input_text' type="text" placeholder='What are you looking for' />
                    <FiSearch className='header_serch' />
                </div>
                    <LuHeartHandshake  className='header_heart'/>
                    <GrCart className='header_cart' />

                
            </div>
          </div>
        </div>

    </header>
  )
}

export default Header
