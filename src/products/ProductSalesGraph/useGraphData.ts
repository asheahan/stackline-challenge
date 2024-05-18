import dayjs from "dayjs";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { selectProductById } from "../productsSlice";

function useGraphData() {
  const { productId = "" } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId),
  );

  const data = product?.sales.map((weeklySales) => ({
    ...weeklySales,
    date: dayjs(weeklySales.weekEnding).valueOf(),
  }));

  return data ?? [];
}

export default useGraphData;
