// import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import { ProductItem } from "../types/order";

// interface ProductFormProps {
//   onSubmit: (product: ProductItem) => void
//   onClose: () => void
// }

export function ProductForm({ onSubmit, onClose }) {
  const [product, setProduct] = useState({
    productName: "",
    size: "",
    batchNo: "",
    quantity: 0,
    unitType: "Box",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    onClose();
  };

  return (
    <Card className="w-full border-0 shadow-lg bg-gradient-to-b from-white to-gray-50/50">
      <CardHeader className="space-y-1 pb-8 border-b">
        <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          Add New Product
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="productName" className="text-sm font-medium">
              Product Name
            </Label>
            <Select
              value={product.productName}
              onValueChange={(value) =>
                setProduct({ ...product, productName: value })
              }
            >
              <SelectTrigger className="transition-shadow focus:shadow-md">
                <SelectValue placeholder="Choose product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="altroz">Altroz Blanco Décor</SelectItem>
                <SelectItem value="ceramic">Ceramic Tile</SelectItem>
                <SelectItem value="porcelain">Porcelain Tile</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="size" className="text-sm font-medium">
              Size
            </Label>
            <Select
              value={product.size}
              onValueChange={(value) => setProduct({ ...product, size: value })}
            >
              <SelectTrigger className="transition-shadow focus:shadow-md">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12X12">12X12</SelectItem>
                <SelectItem value="24X24">24X24</SelectItem>
                <SelectItem value="30X30">30X30</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="batchNo" className="text-sm font-medium">
              Batch No
            </Label>
            <Input
              id="batchNo"
              value={product.batchNo}
              onChange={(e) =>
                setProduct({ ...product, batchNo: e.target.value })
              }
              className="transition-shadow focus:shadow-md"
              placeholder="Enter batch number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-sm font-medium">
              Quantity (As Per Box)
            </Label>
            <Input
              id="quantity"
              type="number"
              value={product.quantity || ""}
              onChange={(e) =>
                setProduct({ ...product, quantity: Number(e.target.value) })
              }
              className="transition-shadow focus:shadow-md"
              placeholder="Enter quantity"
              required
            />
          </div>

          <div className="pt-6 flex justify-end space-x-3">
            <Button
              variant="outline"
              type="button"
              onClick={onClose}
              className="min-w-[100px] hover:shadow-md transition-all"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="min-w-[100px] bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
            >
              Add Item
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
