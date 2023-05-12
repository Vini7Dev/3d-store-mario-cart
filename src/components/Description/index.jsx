import { BuyButton, Container, DiscountPrice, PriceContainer, PriceWithoutDiscount, Title } from "./styles";

const Description = () => {
  return (
    <Container>
      <Title>Boneco do Mario</Title>
      
      <PriceContainer>
        <PriceWithoutDiscount>R$ 1.200,00</PriceWithoutDiscount>
      
        <DiscountPrice>por R$ 990,00</DiscountPrice>
      </PriceContainer>
      
      <BuyButton>Compre Já!</BuyButton>
    </Container>
  )
}

export default Description;
