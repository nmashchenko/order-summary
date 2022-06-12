import styled from 'styled-components'
import background from '../../images/pattern-background-desktop.svg'
import mobileBack from '../../images/pattern-background-mobile.svg'

export const OrderContainer = styled.div`
  background-image: url(${background});
  background-size: contain;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-color: var(--pale-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    background-image: url(${mobileBack});
  }
`

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const OrderCard = styled.div`
  height: 30rem;
  width: 450px;
  background: white;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 27rem;
  }
`

export const OrderImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 25px 25px 0 0;

  @media screen and (max-width: 480px) {
    width: 350px;
  }
`

export const OrderH2 = styled.h2`
  color: hsl(223, 47%, 23%);
  text-align: center;
  margin-top: 40px;
  font-size: 1.7rem;
  font-weight: 900;
`

export const OrderP = styled.p`
  margin-top: 20px;
  color: hsl(224, 23%, 55%);
  width: 300px;
  text-align: center;
`

export const OrderInnerCard = styled.div`
  background: hsl(225, 100%, 98%);
  margin-top: 30px;
  width: 350px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`

export const OrderMusicLogo = styled.img`
  margin-left: 25px;
`

export const OrderInfo = styled.div`
  margin-left: 20px;
`

export const OrderH3 = styled.h3`
  margin-bottom: 10px;
  color: hsl(223, 47%, 23%);
  font-weight: 900;
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    margin-bottom: 3px;
    font-size: 0.9rem;
  }
`

export const OrderPrice = styled.p`
  color: hsl(224, 23%, 55%);

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`
export const OrderChange = styled.a`
  margin-left: 90px;
  color: hsl(245, 75%, 52%);

  @media screen and (max-width: 480px) {
    margin-left: 45px;
  }

  &:hover{
    text-decoration: none;
  }
`
export const OrderButton = styled.button`
  background-color: hsl(245, 75%, 52%);
  margin-top: 30px;
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: hsl(225, 100%, 94%);
  font-weight: 900;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 300px;
    font-size: 15px;
  }

  &:hover{
    background-color: hsl(245, 55%, 52%);
  }
`

export const OrderCancel = styled.a`
  margin-top: 40px;
  font-weight: 900;
  font-size: 0.9rem;
  text-decoration: none;
  color: hsl(224, 23%, 55%);

  @media screen and (max-width: 480px) {
    margin-top: 25px;
  }
`
