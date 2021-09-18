import { useQuery } from "@apollo/client";
import gpl from "graphql-tag";
import { perPage } from "../config";

import Product from "./Product";
import classes from "./Products.module.css";

const ALL_PRODUCTS_QUERY = gpl`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.allProducts?.length) return <p>No products found!</p>;

  return (
    <div className={classes.productList}>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
