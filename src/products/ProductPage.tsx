import { useParams } from "react-router-dom";

import { Grid } from "../components";
import { useAppSelector } from "../hooks";
import ProductDetails from "./ProductDetails";
import { selectProductById } from "./productsSlice";

function ProductPage() {
  const { productId = "" } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId),
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ProductDetails />
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
}

export default ProductPage;
