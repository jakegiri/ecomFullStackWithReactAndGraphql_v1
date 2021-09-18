import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

const updateCacheFunction = (cache, { data }) => {
  cache.evict(cache.identify(data.deleteProduct));
};

//#################################################################
//#################################################################
//#################################################################
//#################################################################
//#################################################################

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading, error, data }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
      update: updateCacheFunction,
    }
  );

  const onDeleteHandler = async () => {
    if (confirm("Are you sure you want to delete this item?")) {
      const res = await deleteProduct();
      console.log(res);
    }
  };

  return (
    <button type="button" onClick={onDeleteHandler}>
      {children}
    </button>
  );
}
