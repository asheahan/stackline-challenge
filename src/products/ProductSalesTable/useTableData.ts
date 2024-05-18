import dayjs from "dayjs";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { formatCurrency } from "../../utils/currencyUtils";
import { selectProductById } from "../productsSlice";

function useTableData() {
  const { productId = "" } = useParams();
  const product = useAppSelector((state) =>
    selectProductById(state, productId),
  );

  return {
    headers: [
      {
        id: "week-ending",
        label: "Week Ending",
      },
      {
        id: "retail-sales",
        label: "Retail Sales",
      },
      {
        id: "wholesale-sales",
        label: "Wholesale Sales",
      },
      {
        id: "units-sold",
        label: "Units Sold",
      },
      {
        id: "retailer-margin",
        label: "Retailer Margin",
      },
    ],
    data:
      product?.sales.map((weeklySales) => ({
        ...weeklySales,
        weekEnding: dayjs(weeklySales.weekEnding).format("MM-DD-YY"),
        retailSales: formatCurrency(weeklySales.retailSales),
        wholesaleSales: formatCurrency(weeklySales.wholesaleSales),
        retailerMargin: formatCurrency(weeklySales.retailerMargin),
      })) ?? [],
  };
}

export default useTableData;
