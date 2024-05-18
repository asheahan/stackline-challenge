import dayjs from "dayjs";
import { ResponsiveContainer, LineChart, Line, YAxis, XAxis } from "recharts";

import { Card, Typography } from "../../components";
import useGraphData from "./useGraphData";

function ProductSalesGraph() {
  const data = useGraphData();

  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">Retail Sales</Typography>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="date"
            scale="time"
            type="number"
            domain={["dataMin", "dataMax"]}
            tickFormatter={dateFormatter}
            interval={4}
            tickLine={false}
          />
          <YAxis hide domain={["dataMin - 1000000", "dataMax + 1000000"]} />
          <Line
            type="monotone"
            dataKey="retailSales"
            dot={false}
            strokeWidth={2}
            stroke="#5F99ED"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

const dateFormatter = (date: number) => {
  return dayjs(date).format("MMM");
};

export default ProductSalesGraph;
