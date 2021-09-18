import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";

import DisplayError from "./ErrorMessage";
import classes from "./SingleProduct.module.css";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { loading, error, data } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <DisplayError error={error} />;
  return (
    <div className={classes.root}>
      <Head>
        <title>Sickfits | {data.Product.name}</title>
      </Head>
      <img
        src={data.Product.photo.image.publicUrlTransformed}
        alt={data.Product.photo.altText}
      />
      <div>
        <h2>{data.Product.name}</h2>
        <p>{data.Product.description}</p>
      </div>
    </div>
  );
}
