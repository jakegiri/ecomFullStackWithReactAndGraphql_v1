import { gql, useMutation } from "@apollo/client";
import { useCart } from "../lib/context/cartState";
import { CURRENT_USER_QUERY } from "../lib/hooks/User";
import DisplayError from "./ErrorMessage";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading, error, data }] = useMutation(
    ADD_TO_CART_MUTATION,
    {
      variables: { id: id },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  const onClickHandler = async () => {
    const res = await addToCart();
  };

  if (error) return <DisplayError error={error} />;

  return (
    <button disabled={loading} type="button" onClick={onClickHandler}>
      ADD{loading && "ing"} TO CART
    </button>
  );
}
