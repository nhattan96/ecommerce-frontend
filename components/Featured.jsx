import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
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
  /* display: flex; */
  align-items: center;
`;

const Featured = () => (
  <Bg>
    <Center>
      <Wrapper>
        <Column>
          <div>
            <Title>Play Game Now</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui
              fuga aperiam, eligendi exercitationem magnam dolorem accusantium
              repellendus eaque eveniet, consequatur hic doloremque recusandae
              saepe perferendis rerum nostrum autem iste?
            </Desc>
            <ButtonWrapper>
              <Button size="l">Read more</Button>
              <Button primary size="l">
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

export default Featured;
