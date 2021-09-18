import Link from "next/link";
import { motion } from "framer-motion";

import { useUser } from "../lib/hooks/User";
import { useCart } from "../lib/context/cartState";

import SignOut from "./SignOut";
import CartCount from "./CartCount";
import classesNav from "../styles/NavStyles.module.css";

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();

  const nosCartItems =
    user &&
    user.cart.reduce(
      (tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0),
      0
    );

  return (
    <nav className={classesNav.nav}>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <button type="button" onClick={openCart}>
            My Cart
            <CartCount key={nosCartItems} count={nosCartItems} />
          </button>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signIn">Sign In</Link>
          <Link href="/signUp">Sign Up</Link>
          <Link href="/requestResetForgetPassword">Forget Password</Link>
        </>
      )}
    </nav>
  );
}
