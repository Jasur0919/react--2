import React from 'react'
import './Main.css'
// import { FaApple } from "react-icons/fa";
import { PiAppleLogo } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Iphone from '../../src/assent/images/iphone.svg'
import Categories from '../../src/assent/images/hero-categories.svg'
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchExclamation } from "react-icons/tb";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import ProductPrice from '../../src/assent/images/product-1.svg'
import Product2 from '../../src/assent/images/product-img-2.svg'
import Product3 from '../../src/assent/images/product-img-3.svg'
import Product5 from '../../src/assent/images/product-img-5.svg'
import Product6 from '../../src/assent/images/product-img-6.svg'
import Product7 from '../../src/assent/images/product-img-7.svg'
import Product8 from '../../src/assent/images/product-img-8.svg'
import Price2 from '../../src/assent/images/product-2.svg'
import Price3 from '../../src/assent/images/product-3.svg'
import Price5 from '../../src/assent/images/product-5.svg'
import Price6 from '../../src/assent/images/product-6.svg'
import Price7 from '../../src/assent/images/product-7.svg'
import Price8 from '../../src/assent/images/product-8.svg'
import Product from '../../src/assent/images/product-img-4.svg'
import { CgEye } from "react-icons/cg";
import { ImHeartBroken } from "react-icons/im";






function Main() {
  const data = [
    {
      id: 1,
      url: <IoIosPhonePortrait  className='hero_card_phone'/>,
      title: "Phone"
    },
    {
      id: 2,
      url: <HiOutlineComputerDesktop className='hero_card_phone'/>
      ,
      title: "Computers",

    },
    {
      id: 3,
      url: <TbDeviceWatchExclamation className='hero_card_phone' />
      ,
      title: "SmartWatch",
    },
    {
      id: 4,
      url: <IoCameraOutline className='hero_card_phone' />
      ,
      title: "Camera",
    },
    {
      id: 5,
      url: <CiHeadphones className='hero_card_phone' />
      ,
      title: "HeadPhones"
    },
    {
      id: 6,
      url: <IoGameControllerOutline className='hero_card_phone'/>,
      title: "Gaming"

    }

  ]

  let cards = data?.map((el) => <div key = {el.id} className="hero_card">
  {el.url} 
  <p>{el.title}</p>
</div> )

 const product = [
  {
    id: 1,
    title: Product ,
    url: ProductPrice,
    heart: <ImHeartBroken />,
    eye: <CgEye />

  },
  {
    id: 1,
    title: Product2,
    url: Price2,
    heart: <ImHeartBroken />,
    eye: <CgEye />
    
  },
  {
    id: 1,
    title: Product3,
    url: Price3,
    heart: <ImHeartBroken />,
    eye: <CgEye />
  },
  {
    id: 1,
    title: Product5,
    url: Price5,
    heart: <ImHeartBroken />,
    eye: <CgEye />
  },
  {
    id: 1,
    title: Product5,
    url: Price5,
    heart: <ImHeartBroken />,
    eye: <CgEye />
  },
  {
    id: 1,
    title: Product6,
    url: Price6,
    heart: <ImHeartBroken />,
    eye: <CgEye />
  },
  {
    id: 1,
    title: Product7,
    url: Price7,
    heart: <ImHeartBroken />,
    eye: <CgEye />
  },
  {
    id: 1,
    title: Product8,
    url: Price8,
    heart: <ImHeartBroken className='product_heart'/>,
    eye: <CgEye  className='product_heart'/>
  }
 ]

  let stl = product?.map((el) =>  <div key={el.id} className="product_card">
                <img src={el.title} className='product_big_img' alt="" />
                <div className="product_img">
                
                    {el.heart}
                    {el.eye}

                {/* <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z"/></svg>
                 



                <svg className='product_img_svg' width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg> */}
                </div>
                <h3>Breed Dry Dog Food</h3>
                <img src={el.url} alt="" />
              </div> 

              )
  return (
    <main>
      <section className='logo'>
        <div className="container">
          <div className="logo_box">
            <div className="logo_box_text">
              <div className="logo_img_apple">
                {<PiAppleLogo  className='logo-apple'/>}
                <span>iPhone 14 Series</span>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <p>Shop Now <FaArrowRight /></p>
            </div>
            <img className='logo_img_iphone' src={Iphone } alt="" />
            <div className=""></div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <div className="hero_box">
            <div className="hero_catecories">
              <img src= {Categories} alt="" />
              <p>Categories</p>
            </div>
            <h1 className='hero_box_h1'>Browse By Category</h1>

            <div className="hero_cards">
              {cards}
            </div>
          </div>
        </div>
      </section>


      <section className="product">
        <div className="container">
          <div className="product_box">
          <div className="hero_catecories">
              <img src= {Categories} alt="" />
              <p>Categories</p>
            </div>

            <div className="product_cards">
              {stl}
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}
export default Main
