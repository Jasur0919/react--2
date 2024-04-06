import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footer-box">
          <div class="footer-text">
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div class="footer-input">
              <input type="text" placeholder="Enter your email" />
              <img src="./images/telegram- footer.svg" alt="" />
            </div>
          </div>
          <div class="footer-text">
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka,</p>
            <span> DH 1515, Bangladesh.</span>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div class="footer-text">
            <h3>Account</h3>
            <p>My account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishist</p>
            <p>Shop</p>
          </div>
          <div class="footer-text">
            <h3>Quick link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>Faq</p>
            <p>Contact</p>
          </div>
          <div class="footer-text">
            <h3>Download App</h3>
            <h4>Save $3 with App New User Only</h4>
            <div class="footer-qrcode">
              <img src="./images/Qrcode-footer.svg" alt="" />
              <div class="footer-AppGoogle">
                <img src="./images/goole-footer.svg" alt="" />
                <img src="./images/apple-footer.svg" alt="" />
              </div>
            </div>
            <div class="footer-sosialMedia">
              <img src="./images/facebook-footer.svg" alt="" />
              <img src="./images/twitter-footer.svg" alt="" />
              <img src="./images/instagram-footer.svg" alt="" />
              <img src="./images/in-footer.svg" alt="" />
            </div>
          </div>
        </div>

        <p class="footer-bot">@Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
