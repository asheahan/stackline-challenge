import { Box, Card, Typography, Chip, Divider } from "../components";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../hooks";
import { selectProductById } from "./productsSlice";

function ProductDetails() {
  const { productId = "" } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId),
  );

  return (
    <Card sx={{ height: "100%" }}>
      <Box
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <img
          src={product?.image}
          alt={product?.title}
          width={200}
          height={200}
        />
        <Typography variant="h5">{product?.title}</Typography>
        <Typography variant="body2">{product?.subtitle}</Typography>
      </Box>
      <Divider />
      <Box p={2}>
        {product?.tags.map((tag) => <Chip key={tag} label={tag} />)}
      </Box>
    </Card>
  );
}

export default ProductDetails;
