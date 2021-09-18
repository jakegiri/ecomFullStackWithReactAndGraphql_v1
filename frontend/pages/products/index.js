// import { useRouter } from "next/dist/client/router";
// import Pagination from "../../components/Pagination";
// import Products from "../../components/Products";

// export default function Orders() {
//   const { query } = useRouter();

//   if (!query?.page) return null;

//   return (
//     <div>
//       <Pagination page={query.page || 1} />
//       <Products page={query.page || 1} />
//       <Pagination page={query.page || 1} />
//     </div>
//   );
// }

import { useRouter } from "next/dist/client/router";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";

export default function Orders() {
  const { query, isReady } = useRouter();

  if (!isReady) return null;

  return (
    <div>
      <Pagination page={query.page || 1} />
      <Products page={query.page || 1} />
      <Pagination page={query.page || 1} />
    </div>
  );
}
