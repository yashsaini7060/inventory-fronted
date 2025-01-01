import { motion } from "framer-motion";
import { Package, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { OrderData, ProductItem } from "../types/order";

// interface OrderSummaryProps {
//   data: OrderData
//   onAddProduct: () => void
//   onRemoveProduct: (index: number) => void
// }

export function OrderSummary({ data, onAddProduct, onRemoveProduct }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-lg space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-primary">
            <Package className="h-5 w-5" />
            Client Address
          </h3>
          <p className="text-sm text-gray-600">
            {data.customerDetails.address}
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-primary">
            <Package className="h-5 w-5" />
            Delivery Address
          </h3>
          <p className="text-sm text-gray-600">
            {data.customerDetails.deliveryAddress}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <p className="text-sm">
              <span className="font-semibold text-gray-700">Order No:</span>{" "}
              <span className="text-primary">{data.orderNo || "Pending"}</span>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-700">Client Name:</span>{" "}
              {data.customerDetails.name}
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-700">
                Client Mobile:
              </span>{" "}
              {data.customerDetails.mobile}
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="font-semibold text-gray-700">Order Date:</span>{" "}
              {data.orderDate}
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-700">
                Expected Delivery:
              </span>{" "}
              {data.customerDetails.expectedDeliveryDate}
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-700">Sales Person:</span>{" "}
              {data.customerDetails.salesPerson}
            </p>
          </div>
        </div>

        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Product Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Batch No</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Unit Type</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {product.productName}
                  </TableCell>
                  <TableCell>{product.size}</TableCell>
                  <TableCell>{product.batchNo}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.unitType}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => onRemoveProduct(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {data.products.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-muted-foreground py-8"
                  >
                    No products added yet. Click the plus button to add
                    products.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-end mt-6">
          <Button
            onClick={onAddProduct}
            size="icon"
            className="h-10 w-10 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
