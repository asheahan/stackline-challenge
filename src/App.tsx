import React, { useEffect } from "react";

import { useAppDispatch } from "./hooks";
import { fetchProducts } from "./products/productsSlice";
import Routes from "./routes";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Fetch products on app load
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
