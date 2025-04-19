import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Layout from "@/components/Layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const Box = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: solid 1px #000;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  padding: 0 10px 0 10px;
`;

const CartPage = () => {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      axios
        .post("/api/cart", {
          ids: cartProducts,
        })
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [cartProducts]);

  return (
    <Layout>
      <Center>
        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <>
                <h1>Cart</h1>
                <table>
                  {products.map((product) => (
                    <tr>
                      <td key={product._id}>{product.title}</td>
                      <td>
                        {cartProducts.filter((id) => id === product._id).length}
                      </td>
                    </tr>
                  ))}
                </table>
              </>
            )}
          </Box>

          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <StyledInput type="text" placeholder="Name"></StyledInput>
              <StyledInput type="text" placeholder="Address 1"></StyledInput>
              <StyledInput type="text" placeholder="Address 2"></StyledInput>
              <Button $black $block>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </Layout>
  );
};

export default CartPage;
