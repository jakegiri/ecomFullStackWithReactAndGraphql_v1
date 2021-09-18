import Head from "next/head";
import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import DisplayError from "./ErrorMessage";
import { perPage } from "../config";

import classesPagination from "../styles/PaginationStyles.module.scss";

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { loading, error, data } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { count } = data._allProductsMeta;
  let pageCount = Math.ceil(count / perPage);
  if (pageCount === 0) pageCount = 1;

  return (
    <div className={classesPagination.root}>
      <Head>
        <title>
          Sick Fits - page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${+page - 1}`}>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items total</p>
      <Link href={`/products/${+page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </div>
  );
}
