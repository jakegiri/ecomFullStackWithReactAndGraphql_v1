import Link from "next/link";

// import classesItemStyles from "../styles/ItemStyles.module.css";
import classesItemStyles from "../styles/ItemStyles.module.scss";
import classesTitle from "../styles/Title.module.css";
import classesPriceTag from "../styles/PriceTag.module.css";
import formatMoney from "../lib/util/formatMoney";
import DeleteProduct from "./DeleteProduct";
import AddToCart from "./AddToCart";

export default function Product({ product }) {
  return (
    <div className={classesItemStyles.root}>
      <img
        // className={classesItemStyles.itemImg}
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <div className={classesTitle.title}>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div className={classesPriceTag.priceTag}>
        {formatMoney(product.price)}
      </div>
      <p>{product.description}</p>
      <div className={classesItemStyles.buttonList}>
        <Link href={{ pathname: "update", query: { id: product.id } }}>
          Edit
        </Link>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
        <AddToCart id={product.id} />
      </div>
    </div>
  );
}
