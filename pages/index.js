import { Layout } from "@/components/Layout";
import Featured from "@/components/Featured";
import { mongooseConnect } from "@/libs/mongoose";
import { Product } from "@/models/Product";
import NewProducts from "@/components/NewProducts";

export default function Home({ product, newProducts }) {
  return (
    <Layout>
      <Featured product={product}></Featured>
      <NewProducts newProducts={newProducts}></NewProducts>
    </Layout>
  );
}
/*
getServerSideProps is a Next.js function 
that can be used to 
fetch data and render the contents of a page at request time.
/ */
export async function getServerSideProps() {
  await mongooseConnect();
  const product = JSON.stringify(await Product.findOne({}).lean());
  const newProducts = JSON.stringify(
    await Product.find({}).limit(10).sort({ createdAt: -1 })
  );
  return {
    props: {
      product: JSON.parse(product),
      newProducts: JSON.parse(newProducts),
    },
  };
}
