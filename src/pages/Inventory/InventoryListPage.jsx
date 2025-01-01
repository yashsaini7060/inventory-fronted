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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Mock data for inventory items
const inventoryItems = [
  {
    id: "1",
    productName: "Widget A",
    productCode: "WA001",
    quantity: 50,
    unitCost: 9.99,
    status: "in-stock",
    lastRecvDt: "2023-05-15",
    ageing: 30,
  },
  {
    id: "5",
    productName: "Product E",
    productCode: "PE005",
    quantity: 10,
    unitCost: 39.99,
    status: "low-stock",
    lastRecvDt: "2023-05-01",
    ageing: 44,
  },
  {
    id: "4",
    productName: "Device D",
    productCode: "DD004",
    quantity: 100,
    unitCost: 49.99,
    status: "in-stock",
    lastRecvDt: "2023-05-25",
    ageing: 20,
  },
  {
    id: "2",
    productName: "Gadget B",
    productCode: "GB002",
    quantity: 30,
    unitCost: 19.99,
    status: "low-stock",
    lastRecvDt: "2023-04-20",
    ageing: 55,
  },
  {
    id: "3",
    productName: "Tool C",
    productCode: "TC003",
    quantity: 0,
    unitCost: 29.99,
    status: "out-of-stock",
    lastRecvDt: "2023-03-10",
    ageing: 95,
  },
  {
    id: "4",
    productName: "Device D",
    productCode: "DD004",
    quantity: 100,
    unitCost: 49.99,
    status: "in-stock",
    lastRecvDt: "2023-05-25",
    ageing: 20,
  },
];

export default function InventoryListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(inventoryItems.length / itemsPerPage);

  const paginatedInventory = inventoryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredItems = inventoryItems.filter(
  //   (item) =>
  //     item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.productCode.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleRowClick = (id) => {
  //   navigate(`/inventory/${id}`);
  // };

  return (
    <div className="p-2 md:p-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl md:text-2xl font-bold">
            Inventory List
          </CardTitle>
        </CardHeader>
        <div className="grid gap-4 md:grid-cols-2 p-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Asset Value
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10,200,323</div>
              <p className="text-xs text-muted-foreground">
                Total value of all inventory items
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Products
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search inventory..."
              className="w-full sm:max-w-sm"
            />
            <div className="flex gap-2 w-full sm:w-auto justify-end">
              <Button variant="outline" size="icon">
                <RefreshCcw className="h-4 w-4" />
                <span className="sr-only">Refresh</span>
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>
          </div>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">
                    Product Name
                  </TableHead>
                  <TableHead className="whitespace-nowrap">
                    Product Code
                  </TableHead>
                  <TableHead className="whitespace-nowrap">Quantity</TableHead>
                  <TableHead className="whitespace-nowrap">Unit Cost</TableHead>
                  <TableHead className="whitespace-nowrap">Status</TableHead>
                  <TableHead className="whitespace-nowrap">
                    Last Received
                  </TableHead>
                  <TableHead className="whitespace-nowrap">
                    Ageing (days)
                  </TableHead>
                  <TableHead className="whitespace-nowrap">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedInventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="whitespace-nowrap">
                      {item.productName}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.productCode}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.unitCost}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {/* {item.status} */}
                      <Badge
                        variant={
                          item.status === "in-stock"
                            ? "default"
                            : item.status === "low-stock"
                            ? "warning"
                            : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.lastRecvDt}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.ageing}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4 text-red-600" />
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
