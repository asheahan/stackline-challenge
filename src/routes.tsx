import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Box } from "./components";
import Header from "./Header";
import ProductPage from "./products/ProductPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/products/B007TIE0GQ" replace />} />
        <Route path="products/:productId" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Box
        component="main"
        p={3}
        height="100%"
        sx={{ backgroundColor: "#F5F7F9" }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default AllRoutes;
