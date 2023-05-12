import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
`

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;600&display=swap');
  font-family: 'Unbounded', sans-serif;
  font-weight: 600;
  font-size: 72px;
  color: yellow;
  margin: 0;
  opacity: 0.85;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-top: 40px;
`

export const DiscountPrice = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;600&display=swap');
  font-family: 'Unbounded', sans-serif;
  font-weight: 300;
  font-size: 42px;
  color: whitesmoke;
  margin: 0;
`

export const PriceWithoutDiscount = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;600&display=swap');
  font-family: 'Unbounded', sans-serif;
  font-weight: 300;
  font-size: 28px;
  text-decoration: line-through;
  color: whitesmoke;
  margin: 0;
`

export const BuyButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;600&display=swap');
  font-family: 'Unbounded', sans-serif;
  font-weight: 600;
  font-size: 54px;
  color: yellow;
  margin-top: 80px;
  padding: 12px 22px;
  background: none;
  border: 2px solid yellow;
  border-radius: 10px;
  transition: opacity 200ms;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`
