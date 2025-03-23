import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
