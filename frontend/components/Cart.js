import { useUser } from "../lib/hooks/User";
import { useCart } from "../lib/context/cartState";
import formatMoney from "../lib/util/formatMoney";
import calcTotalPrice from "../lib/util/calcTotalPrice";
import DeleteCartItem from "./DeleteCartItem";
import Checkout from "./Checkout";

import stylesCart from "../styles/CartStyles.module.scss";
import stylesSupreme from "../styles/Supreme.module.scss";
import stylesCartItem from "../styles/CartItem.module.scss";
import stylesCloseButton from "../styles/CloseButton.module.scss";

//##################################################
//              CART ITEM
//##################################################

function CartItem({ cartItem }) {
  const { product } = cartItem;

  if (!product) return null;

  return (
    <div className={stylesCartItem.root}>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>Quantity: {cartItem.quantity}</p>
        <p>Total Price: {formatMoney(product.price * cartItem.quantity)}</p>
      </div>
      <DeleteCartItem id={cartItem.id} />
    </div>
  );
}

//##################################################
//              CART
//##################################################
export default function Cart() {
  const me = useUser();
  const { cartIsOpen, closeCart } = useCart();

  if (!me) return <p>Loading...</p>;
  return (
    <div className={`${stylesCart.root} ${cartIsOpen && stylesCart.open}`}>
      <header>
        <div className={stylesSupreme.root}>{me.name}'s Cart</div>
        <button className={stylesCloseButton.root} onClick={closeCart}>
          {" "}
          Close{" "}
        </button>
      </header>
      <ul>
        {!me.cart.length && <p>There is no item in your cart!</p>}
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </div>
  );
}
