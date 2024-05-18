import { useParams } from "react-router-dom";

import { useAppSelector } from "../hooks";
import { selectProductById } from "./productsSlice";

function ProductPage() {
  const { productId = "" } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId),
  );

  return <div>Not implemented yet</div>;
}

export default ProductPage;
