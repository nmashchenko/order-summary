import React from 'react'
import img from '../../images/illustration-hero.svg'
import logo from '../../images/icon-music.svg'
import {
  OrderContainer,
  OrderWrapper,
  OrderImage,
  OrderCard,
  OrderH2,
  OrderP,
  OrderInnerCard,
  OrderMusicLogo,
  OrderInfo,
  OrderH3,
  OrderPrice,
  OrderChange,
  OrderButton,
  OrderCancel,

} from '../../components/Order/OrderElements'

const Order = () => {
  return (
    <>
      <OrderContainer>
        {/* <OrderWrapper> */}
          <OrderImage src={img} alt='image'>
          </OrderImage>
          <OrderCard>
            <OrderH2>Order Summary</OrderH2>
            <OrderP>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</OrderP>
            <OrderInnerCard>
              <OrderMusicLogo src={logo}></OrderMusicLogo>
              <OrderInfo>
                <OrderH3>Annual Plan</OrderH3>
                <OrderPrice>$59.99/year</OrderPrice>
              </OrderInfo>
              <OrderChange href="https://www.w3schools.com">Change</OrderChange>
            </OrderInnerCard>
            <OrderButton>Proceed to Payment</OrderButton>
            <OrderCancel href='/'>Cancel Order</OrderCancel>
          </OrderCard>
        {/* </OrderWrapper> */}
      </OrderContainer>
    </>
  )
}

export default Order
