import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import gql from "graphql-tag";
import nProgress from "nprogress";
import { useState } from "react";

import { useCart } from "../lib/context/cartState";
import DisplayError from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "../lib/hooks/User";

import stylesCheckoutForm from "../styles/CheckoutForm.module.scss";
import stylesSickButton from "../styles/SickButton.module.scss";

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

//#####################################################
//#####################################################
//          COMPONENT
//#####################################################
//#####################################################

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { closeCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [checkout, { error: graphqlError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  //=============================================
  //    EVENT HANDLERS
  //=============================================

  const onSubmitHandler = async (e) => {
    // 1. Stop the form from submitting and turn the loader on
    e.preventDefault();
    setLoading(true);
    // 2. Start the page transition
    nProgress.start();
    // 3. Create the payment method via stripe (Token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // 4. Handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return;
    }
    // 5. Send the token from step 3 to our keystone server, via a custom mutation!
    const order = await checkout({ variables: { token: paymentMethod.id } });
    // 6. Change the page to view the order
    router.push({
      pathname: "/order/[id]",
      query: { id: order.data.checkout.id },
    });
    // 7. Close the cart
    closeCart();
    // 8. Turn the loader off
    setLoading(false);
    nProgress.done();
  };

  //======================================
  //             RETURN
  //======================================
  return (
    <form className={stylesCheckoutForm.root} onSubmit={onSubmitHandler}>
      {error && <DisplayError error={error} />}
      <CardElement />
      <button type="submit" className={stylesSickButton.root}>
        Checkout Now
      </button>
    </form>
  );
}

//#####################################################
//#####################################################
//          COMPONENT
//#####################################################
//#####################################################

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
