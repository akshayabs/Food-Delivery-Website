import React from 'react'
import "../styles/pay.css";
import "../styles/product-details.css";
import CommonSection from '../components/UI/common-section/CommonSection'
import {  useSelector } from 'react-redux';
const Pay = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const ship=30;
    const total = totalAmount + Number(ship)
  return (
    <div><div class="container">
    <div class="printer-top"></div>
      
    <div class="paper-container">
      <div class="printer-bottom"></div>
  
      <div class="paper">
        <div class="form__group">
          <div class="success-icon">&#10004;</div>
          <div class="success-title">
            Payment Complete
          </div>
          <div class="success-description">
            Your payment for {total} in USDT has been recieved and send to Starvy.
          </div>
          <div class="order-footer">You can close this page!</div>
        </div>
        <div class="jagged-edge"></div>
      </div>
      
    </div>
  </div>
  </div>
  
  )
}

export default Pay