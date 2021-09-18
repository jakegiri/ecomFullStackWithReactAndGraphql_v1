import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import Head from "next/head";

import formatMoney from "../lib/util/formatMoney";
import DisplayError from "../components/ErrorMessage";
import stylesOrderUI from "../styles/OrderUI.module.scss";
import stylesOrderItem from "../styles/OrderItem.module.scss";

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    allOrders {
      id
      charge
      total
      user {
        id
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

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrdersPage() {
  const { loading, error, data } = useQuery(USER_ORDERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  console.log(data);
  return (
    <div>
      <Head>
        <title>Your Orders {data.allOrders.length}</title>
      </Head>
      <h2>You have {data.allOrders.length} orders</h2>
      <div className={stylesOrderUI.root}>
        {data.allOrders.map((order) => (
          <div className={stylesOrderItem.root}>
            <Link href={`/order/${order.id}`}>
              <>
                <div className={stylesOrderItem["order-meta"]}>
                  <p>{countItemsInAnOrder(order)} Items</p>
                  <p>
                    {order.items.length} Product
                    {order.items.length === 1 ? "" : "s"}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className={stylesOrderItem.images}>
                  {order.items.map((item) => (
                    <img
                      key={item.id}
                      src={item.photo.image.publicUrlTransformed}
                      alt={item.name}
                    />
                  ))}
                </div>
              </>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
