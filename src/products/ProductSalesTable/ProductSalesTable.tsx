import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../../components";
import useTableData from "./useTableData";

function ProductSalesTable() {
  const { headers, data } = useTableData();

  return (
    <Card sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell component="th" key={header.id}>
                {header.label.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((weeklySales) => (
            <TableRow key={weeklySales.weekEnding}>
              <TableCell>{weeklySales.weekEnding}</TableCell>
              <TableCell>{weeklySales.retailSales}</TableCell>
              <TableCell>{weeklySales.wholesaleSales}</TableCell>
              <TableCell>{weeklySales.unitsSold}</TableCell>
              <TableCell>{weeklySales.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default ProductSalesTable;
