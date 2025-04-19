import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({ newProducts }) {
  return (
    <StyledProductsGrid>
      {newProducts?.length > 0 &&
        newProducts.map((product) => {
          return <ProductBox key={product._id} {...product} />;
        })}
    </StyledProductsGrid>
  );
}
