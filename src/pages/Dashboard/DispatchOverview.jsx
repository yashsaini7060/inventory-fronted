import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { InventoryItem, Order } from "./Dashboard";

// interface DispatchOverviewProps {
//   orders: Order[]
//   inventory: InventoryItem[]
// }

export default function DispatchOverview({ orders, inventory }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dispatch Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  {order.items
                    .map((item) => {
                      const inventoryItem = inventory.find(
                        (i) => i.id === item.itemId
                      );
                      return `${inventoryItem?.name} (${item.quantity})`;
                    })
                    .join(", ")}
                </TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
