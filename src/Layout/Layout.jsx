import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
function Layout({ children }) {
  return (
    <>
      <header>
        <Link to="/products">Shopping Site Name</Link>
        <Link to="checkout">
          <PiShoppingCartSimpleBold />
        </Link>
      </header>
      {children}
      <footer></footer>
    </>
  );
}

export default Layout;
