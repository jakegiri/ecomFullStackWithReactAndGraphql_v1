import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import DisplayError from "./ErrorMessage";
import stylesDeleteCartItem from "../styles/DeleteCartItem.module.scss";

const DELETE_CART_ITEM_MUTATION = gql`
  mutation DELETE_CART_ITEM($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

const updateCacheFunction = (cache, { data }) => {
  cache.evict(cache.identify(data.deleteCartItem));
};

export default function DeleteCartItem({ id }) {
  const [deleteCartItem, { loading, error, data }] = useMutation(
    DELETE_CART_ITEM_MUTATION,
    {
      variables: { id: id },
      update: updateCacheFunction,
    }
  );

  if (error) return <DisplayError error={error} />;

  return (
    <button
      disabled={loading}
      type="button"
      onClick={deleteCartItem}
      className={stylesDeleteCartItem.root}
    >
      &times;
    </button>
  );
}
