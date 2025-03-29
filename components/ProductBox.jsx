import styled from "styled-components";
import CartButton from "./icon-btn/CartIcon";
import Button from "./Button";
import CartIcon from "./icon-btn/CartIcon";

const ProductDetailStyle = styled.div`
  margin-top: 10px;
  h1 {
    font-size: 1.2rem;
    color: #210f37;
    font-weight: bold;
  }
  h2 {
    font-size: 1rem;
    color: #ae445a;
    font-weight: bold;
  }
`;

const PriceBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const StyledProductBox = styled.div`
  background: #fdfaf6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  img {
    width: 100%;
    max-height: 150px;
    object-fit: contain;
    word-break: break-all;
  }
`;

const ProductBox = ({ title, description, price, images }) => {
  return (
    <StyledProductBox>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
        }}
      >
        <img src={images[0]} alt={images[0]} />
      </div>
      <ProductDetailStyle>
        <h1>{title}</h1>
        <PriceBoxStyle>
          <h2>{price}$</h2>
          <Button $primary>
            <CartIcon></CartIcon>
          </Button>
        </PriceBoxStyle>
      </ProductDetailStyle>
    </StyledProductBox>
  );
};

export default ProductBox;
