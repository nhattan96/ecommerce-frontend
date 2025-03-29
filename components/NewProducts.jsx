import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding-top: 20px;
  margin: 0 20px;
`;

const NewProducts = ({ newProducts }) => {
  return (
    <ProductGrid>
      {newProducts?.length > 0 &&
        newProducts.map((product) => <ProductBox {...product}></ProductBox>)}
    </ProductGrid>
  );
};

export default NewProducts;
