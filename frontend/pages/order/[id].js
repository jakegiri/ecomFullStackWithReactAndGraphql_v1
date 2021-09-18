import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import Head from "next/head";

import DisplayError from "../../components/ErrorMessage";
import formatMoney from "../../lib/util/formatMoney";
import stylesOrder from "../../styles/OrderStyles.module.scss";

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      total
      charge
      user {
        name
        email
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
          altText
        }
      }
    }
  }
`;

export default function SingleOrderPage() {
  const { query } = useRouter();
  const { loading, error, data } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query?.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div className={stylesOrder.root}>
      <Head>
        <title>Sick Fits - {data.order.id}</title>
      </Head>
      <p>
        <span>Order Id:</span>
        <span>{data.order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{data.order.charge}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{formatMoney(data.order.total)}</span>
      </p>
      <p>
        <span>ItemCount:</span>
        <span>{data.order.items.length}</span>
      </p>
      <div className={stylesOrder.items}>
        {data.order.items.map((item) => (
          <div key={item.id} className={stylesOrder["order-item"]}>
            <img src={item.photo.image.publicUrlTransformed} alt={item.name} />
            <div className={stylesOrder["item-details"]}>
              <h2>{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
