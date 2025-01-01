import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import { InventoryItem, Order } from "./Dashboard";

// interface RecentActivityProps {
//   orders: Order[]
//   inventory: InventoryItem[]
// }

export default function RecentActivity({ orders, inventory }) {
  const recentOrders = orders.slice(-5).reverse();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentOrders.map((order) => (
            <li
              key={order.id}
              className="flex items-center bg-muted/50 p-4 rounded-lg"
            >
              <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                {order.status === "pending" ? "🕒" : "✅"}
              </span>
              <div className="flex-grow">
                <p className="font-medium">Order {order.id}</p>
                <p className="text-sm text-muted-foreground">
                  {order.items
                    .map((item) => {
                      const inventoryItem = inventory.find(
                        (i) => i.id === item.itemId
                      );
                      return `${inventoryItem?.name} (${item.quantity})`;
                    })
                    .join(", ")}
                </p>
              </div>
              <div className="ml-auto flex flex-col items-end">
                <Badge
                  variant={order.status === "pending" ? "secondary" : "default"}
                >
                  {order.status}
                </Badge>
                <span className="text-sm text-muted-foreground mt-1">
                  {order.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
