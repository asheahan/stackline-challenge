import { useParams, Navigate } from "react-router-dom";

import { Box, Grid, CircularProgress } from "../components";
import { useAppSelector } from "../hooks";
import ProductDetails from "./ProductDetails";
import ProductSalesGraph from "./ProductSalesGraph/ProductSalesGraph";
import ProductSalesTable from "./ProductSalesTable/ProductSalesTable";
import { selectProductById, selectProductsIsLoading } from "./productsSlice";

function ProductPage() {
  const { productId = "" } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId),
  );
  const productsLoading = useAppSelector(selectProductsIsLoading);

  if (productsLoading) {
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ProductDetails />
      </Grid>
      <Grid item xs={8}>
        <ProductSalesGraph />
        <ProductSalesTable />
      </Grid>
    </Grid>
  );
}

export default ProductPage;
