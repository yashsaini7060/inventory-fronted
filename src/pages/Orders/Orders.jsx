import {
  DollarSign,
  MoreHorizontal,
  Package,
  Pencil,
  Plus,
  RefreshCcw,
  Trash,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
    id: "OS18KOG",
    items: 2,
    amount: 2100,
    created: "October 31, 2017",
    vendor: "Dentalku",
    status: "COMPLETE",
    received: 3,
    total: 3,
  },
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
function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const paginatedOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    // <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8">
    //   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    //     <h1 className="text-xl sm:text-2xl font-bold">Orders</h1>
    //     <Button>Add New Stock Item</Button>
    //   </div>

    //   <div className="grid gap-4 sm:grid-cols-2">
    //     <Card className="p-6">
    //       <div className="text-sm text-muted-foreground">
    //         Total Orders Value
    //       </div>
    //       <div className="text-2xl font-bold">$10,200,323</div>
    //     </Card>

    //     <Card className="p-6">
    //       <div className="text-sm text-muted-foreground">Total Orders</div>
    //       <div className="text-2xl font-bold">32 Orders</div>
    //       <div className="mt-2 flex gap-2 text-sm">
    //         <Badge
    //           variant="outline"
    //           className="bg-green-50 text-green-700 border-green-200"
    //         >
    //           In stock: 20
    //         </Badge>
    //         <Badge
    //           variant="outline"
    //           className="bg-yellow-50 text-yellow-700 border-yellow-200"
    //         >
    //           Low stock: 4
    //         </Badge>
    //         <Badge
    //           variant="outline"
    //           className="bg-red-50 text-red-700 border-red-200"
    //         >
    //           Out of stock: 8
    //         </Badge>
    //       </div>
    //     </Card>
    //   </div>

    //   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    //     <div className="flex items-center gap-2 w-full sm:w-auto">
    //       <Input
    //         placeholder="Search orders..."
    //         value={searchQuery}
    //         onChange={(e) => setSearchQuery(e.target.value)}
    //         className="w-full sm:max-w-xs"
    //       />
    //       <Button variant="outline">Filters</Button>
    //     </div>
    //     <Button className="w-full sm:w-auto">Order Stock</Button>
    //   </div>

    //   <div className="rounded-md border overflow-x-auto">
    //     <Table>
    //       <TableHeader>
    //         <TableRow>
    //           <TableHead className="whitespace-nowrap">ORDER</TableHead>
    //           <TableHead className="whitespace-nowrap">CREATED</TableHead>
    //           <TableHead className="whitespace-nowrap">FROM VENDOR</TableHead>
    //           <TableHead className="whitespace-nowrap">STATUS</TableHead>
    //           <TableHead className="whitespace-nowrap">ITEM RECEIVED</TableHead>
    //           <TableHead className="whitespace-nowrap">SEND EMAIL</TableHead>
    //           <TableHead className="whitespace-nowrap">ACTIONS</TableHead>
    //         </TableRow>
    //       </TableHeader>
    //       <TableBody>
    //         {orders.map((order) => (
    //           <TableRow key={order.id}>
    //             <TableCell className="whitespace-nowrap">
    //               <div>
    //                 <div className="font-medium">#{order.id}</div>
    //                 <div className="text-sm text-muted-foreground">
    //                   {order.items} items • ${order.amount}
    //                 </div>
    //               </div>
    //             </TableCell>
    //             <TableCell className="whitespace-nowrap">
    //               {order.created}
    //             </TableCell>
    //             <TableCell className="whitespace-nowrap">
    //               {order.vendor}
    //             </TableCell>
    //             <TableCell>
    //               <Badge
    //                 variant={
    //                   order.status === "COMPLETE" ? "default" : "secondary"
    //                 }
    //               >
    //                 {order.status}
    //               </Badge>
    //             </TableCell>
    //             <TableCell>
    //               <div className="flex items-center gap-2">
    //                 <Progress
    //                   value={(order.received / order.total) * 100}
    //                   className="w-[60px]"
    //                 />
    //                 <span className="text-sm text-muted-foreground">
    //                   {order.received}/{order.total}
    //                 </span>
    //               </div>
    //             </TableCell>
    //             <TableCell>
    //               <Button
    //                 variant="ghost"
    //                 disabled={order.status === "COMPLETE"}
    //               >
    //                 {order.status === "COMPLETE" ? "Received" : "Receive"}
    //               </Button>
    //             </TableCell>
    //             <TableCell>
    //               <div className="flex items-center gap-2">
    //                 <Button variant="ghost" size="icon">
    //                   <Pencil className="h-4 w-4" />
    //                 </Button>
    //                 <Button variant="ghost" size="icon">
    //                   <Trash className="h-4 w-4 text-red-600" />
    //                   {/* <Copy className="h-4 w-4" /> */}
    //                 </Button>
    //                 <DropdownMenu>
    //                   <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" size="icon">
    //                       <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                   </DropdownMenuTrigger>
    //                   <DropdownMenuContent align="end">
    //                     <DropdownMenuItem>View Details</DropdownMenuItem>
    //                     <DropdownMenuItem>Download Invoice</DropdownMenuItem>
    //                     <DropdownMenuItem>Contact Vendor</DropdownMenuItem>
    //                     <DropdownMenuItem className="text-red-600">
    //                       <Trash className="mr-2 h-4 w-4" />
    //                       Delete
    //                     </DropdownMenuItem>
    //                   </DropdownMenuContent>
    //                 </DropdownMenu>
    //               </div>
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </div>
    // </div>
    <div className="p-2 md:p-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl md:text-2xl font-bold">
            Orders
          </CardTitle>
        </CardHeader>
        <div className="grid gap-4 md:grid-cols-2 p-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Orders Value
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10,200,323</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Orders
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32 orders</div>
              <div className="mt-2 flex gap-2 text-sm">
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  Dispatched: 20
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 border-yellow-200"
                >
                  Pending: 4
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200"
                >
                  Cancelled: 8
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search order..."
              className="w-full sm:max-w-sm"
            />
            <div className="flex gap-2 w-full sm:w-auto justify-end">
              <Button variant="outline" size="icon">
                <RefreshCcw className="h-4 w-4" />
                <span className="sr-only">Refresh</span>
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Order
              </Button>
            </div>
          </div>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">ORDER</TableHead>
                  <TableHead className="whitespace-nowrap">CREATED</TableHead>
                  <TableHead className="whitespace-nowrap">
                    FROM VENDOR
                  </TableHead>
                  <TableHead className="whitespace-nowrap">STATUS</TableHead>
                  <TableHead className="whitespace-nowrap">
                    ITEM RECEIVED
                  </TableHead>
                  <TableHead className="whitespace-nowrap">
                    SEND EMAIL
                  </TableHead>
                  <TableHead className="whitespace-nowrap">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedOrders.map((order) => (
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
                            <DropdownMenuItem>
                              Download Invoice
                            </DropdownMenuItem>
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
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 py-4 overflow-x-auto">
            <Pagination>
              <PaginationContent className="flex-wrap justify-center">
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((page) => Math.max(1, page - 1));
                    }}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((page) => Math.min(totalPages, page + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Orders;
