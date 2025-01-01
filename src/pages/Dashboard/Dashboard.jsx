"use client";

import { BarChart3, Package, ShoppingCart, TruckIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DispatchChart from "./DispatchChart";
import DispatchOverview from "./DispatchOverview";
import InventoryChart from "./InventoryChart";
import InventoryOverview from "./InventoryOverview";
import OrderChart from "./OrderChart";
import OrderOverview from "./OrderOverview";
import RecentActivity from "./RecentActivity";
// import { ThemeToggle } from "./ThemeToggle";

// export interface InventoryItem {
//   id: string
//   name: string
//   quantity: number
//   category: string
// }

// export interface Order {
//   id: string
//   items: { itemId: string; quantity: number }[]
//   status: 'pending' | 'dispatched'
//   date: string
// }

export default function Dashboard() {
  const [inventory, setInventory] = useState([]);
  const [orders, setOrders] = useState([]);

  // Simulating data fetching
  useEffect(() => {
    // Sample inventory data
    setInventory([
      { id: "1", name: "Widget A", quantity: 100, category: "Electronics" },
      { id: "2", name: "Gadget B", quantity: 75, category: "Electronics" },
      { id: "3", name: "Tool C", quantity: 50, category: "Hardware" },
      { id: "4", name: "Part D", quantity: 200, category: "Automotive" },
      { id: "5", name: "Supply E", quantity: 150, category: "Office" },
    ]);

    // Sample order data
    setOrders([
      {
        id: "1",
        items: [{ itemId: "1", quantity: 5 }],
        status: "pending",
        date: "2023-06-01",
      },
      {
        id: "2",
        items: [{ itemId: "2", quantity: 3 }],
        status: "dispatched",
        date: "2023-06-02",
      },
      {
        id: "3",
        items: [{ itemId: "3", quantity: 2 }],
        status: "pending",
        date: "2023-06-03",
      },
      {
        id: "4",
        items: [{ itemId: "4", quantity: 10 }],
        status: "dispatched",
        date: "2023-06-04",
      },
      {
        id: "5",
        items: [{ itemId: "5", quantity: 7 }],
        status: "pending",
        date: "2023-06-05",
      },
    ]);
  }, []);

  return (
    <ScrollArea className="h-screen">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          {/* <ThemeToggle /> */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Inventory Items
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inventory.length}</div>
              <p className="text-xs text-muted-foreground">
                +{inventory.length} from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Orders
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
              <p className="text-xs text-muted-foreground">
                +{Math.round(orders.length * 0.1)} from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Orders
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {orders.filter((order) => order.status === "pending").length}
              </div>
              <p className="text-xs text-muted-foreground">
                +
                {Math.round(
                  orders.filter((order) => order.status === "pending").length *
                    0.05
                )}{" "}
                from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Dispatched Orders
              </CardTitle>
              <TruckIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {orders.filter((order) => order.status === "dispatched").length}
              </div>
              <p className="text-xs text-muted-foreground">
                +
                {Math.round(
                  orders.filter((order) => order.status === "dispatched")
                    .length * 0.15
                )}{" "}
                from last week
              </p>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="inventory" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="dispatch">Dispatch</TabsTrigger>
          </TabsList>
          <TabsContent value="inventory">
            <div className="grid gap-6 md:grid-cols-2">
              <InventoryOverview inventory={inventory} />
              <InventoryChart inventory={inventory} />
            </div>
          </TabsContent>
          <TabsContent value="orders">
            <div className="grid gap-6 md:grid-cols-2">
              <OrderOverview orders={orders} inventory={inventory} />
              <OrderChart orders={orders} />
            </div>
          </TabsContent>
          <TabsContent value="dispatch">
            <div className="grid gap-6 md:grid-cols-2">
              <DispatchOverview
                orders={orders.filter((order) => order.status === "dispatched")}
                inventory={inventory}
              />
              <DispatchChart orders={orders} />
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-6">
          <RecentActivity orders={orders} inventory={inventory} />
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
