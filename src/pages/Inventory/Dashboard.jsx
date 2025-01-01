import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: "OS12KDS",
    items: 2,
    amount: 2010,
    created: "July 14, 2015",
    vendor: "Barone LLC",
    status: "PENDING",
    received: 0,
    total: 3,
  },
  {
    id: "OS19KQK",
    items: 2,
    amount: 1500,
    created: "October 31, 2017",
    vendor: "Acme Co.",
    status: "PENDING",
    received: 0,
    total: 3,
  },
  {
    id: "OS14KOC",
    items: 2,
    amount: 630,
    created: "October 24, 2018",
    vendor: "Abstego Ltd.",
    status: "COMPLETE",
    received: 3,
    total: 3,
  },
  {
    id: "OS19K0T",
    items: 2,
    amount: 2000,
    created: "March 6, 2018",
    vendor: "Binford Ltd.",
    status: "PENDING",
    received: 0,
    total: 3,
  },
  {
    id: "OS18KOG",
    items: 2,
    amount: 2100,
    created: "October 31, 2017",
    vendor: "Dentalku",
    status: "COMPLETE",
    received: 3,
    total: 3,
  },
];

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Stocks</h1>
        <Button href="/inventory/additem">Add New Stock Item</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Total Asset Value</div>
          <div className="text-2xl font-bold">$10,200,323</div>
        </Card>

        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Total Products</div>
          <div className="text-2xl font-bold">32 products</div>
          <div className="mt-2 flex gap-2 text-sm">
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              In stock: 20
            </Badge>
            <Badge
              variant="outline"
              className="bg-yellow-50 text-yellow-700 border-yellow-200"
            >
              Low stock: 4
            </Badge>
            <Badge
              variant="outline"
              className="bg-red-50 text-red-700 border-red-200"
            >
              Out of stock: 8
            </Badge>
          </div>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Input
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-xs"
          />
          <Button variant="outline">Filters</Button>
        </div>
        <Button>Order Stock</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ORDER</TableHead>
              <TableHead>CREATED</TableHead>
              <TableHead>FROM VENDOR</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>ITEM RECEIVED</TableHead>
              <TableHead>SEND EMAIL</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">#{order.id}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.items} items • ${order.amount}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{order.created}</TableCell>
                <TableCell>{order.vendor}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "COMPLETE" ? "default" : "secondary"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={(order.received / order.total) * 100}
                      className="w-[60px]"
                    />
                    <span className="text-sm text-muted-foreground">
                      {order.received}/{order.total}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    disabled={order.status === "COMPLETE"}
                  >
                    {order.status === "COMPLETE" ? "Received" : "Receive"}
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4 text-red-600" />
                      {/* <Copy className="h-4 w-4" /> */}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Download Invoice</DropdownMenuItem>
                        <DropdownMenuItem>Contact Vendor</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
