import { useRouter } from "next/router";

import UpdateProduct from "../components/UpdateProduct";

export default function sellPage(props) {
  const { query } = useRouter();

  console.log("rendering...");
  if (!query?.id) {
    return null;
  }

  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
