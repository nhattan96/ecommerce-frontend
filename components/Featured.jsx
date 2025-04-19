import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 25px;
`;

const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const addFeaturedToCard = () => {
    addProduct(product._id);
  };

  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>{product?.title}</Title>
              <Desc>{product?.description}</Desc>
              <ButtonWrapper>
                <ButtonLink href="/products" $whiteoutline size="l">
                  Read more
                </ButtonLink>
                <Button $primary size="l" onClick={addFeaturedToCard}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-dualsense-image-block-01-en-16aug24?$facebook$"
              alt="https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-dualsense-image-block-01-en-16aug24?$facebook$"
            />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
