import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import { Order } from "./Dashboard";

// interface DispatchChartProps {
//   orders: Order[]
// }

export default function DispatchChart({ orders }) {
  const dispatchedOrders = orders.filter(
    (order) => order.status === "dispatched"
  ).length;
  const pendingOrders = orders.filter(
    (order) => order.status === "pending"
  ).length;

  const data = [
    { name: "Dispatched", value: dispatchedOrders },
    { name: "Pending", value: pendingOrders },
  ];

  const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Status Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
