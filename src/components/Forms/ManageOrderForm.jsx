import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

import { useToast } from "../../hooks/use-toast";
import { Textarea } from "../ui/textarea";

// import { deleteOrder, updateOrder } from "../actions/manage-order";
// import { CustomerDetails, OrderData, ProductItem } from "../types/order";

// interface ManageOrderFormProps {
//   initialData: OrderData
// }
// { initialData }
export function ManageOrderForm() {
  const initialData = {
    orderNo: "ORD001",
    orderDate: "2023-06-15",
    customerDetails: {
      name: "John Doe",
      mobile: "1234567890",
      address: "123 Main St, City, Country",
      deliveryAddress: "456 Elm St, City, Country",
      expectedDeliveryDate: "2023-06-20",
      salesPerson: "aditya",
    },
    products: [
      {
        productName: "Altroz Blanco Décor",
        size: "12X12",
        batchNo: "5230830",
        quantity: 10,
        unitType: "Box",
      },
    ],
  };
  const [formData, setFormData] = useState(initialData);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleCustomerDetailsChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      customerDetails: {
        ...prev.customerDetails,
        [field]: value,
      },
    }));
  };

  const handleProductChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      ),
    }));
  };

  const handleAddProduct = () => {
    setFormData((prev) => ({
      ...prev,
      products: [
        ...prev.products,
        {
          productName: "",
          size: "",
          batchNo: "",
          quantity: 0,
          unitType: "Box",
        },
      ],
    }));
  };

  const handleRemoveProduct = (index) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }));
  };

  const handleUpdateOrder = async () => {
    setIsUpdating(true);
    try {
      // const result = await updateOrder(formData.orderNo, formData);
      // if (result.success) {
      //   toast({
      //     title: "Order Updated",
      //     description: "The order has been successfully updated.",
      //   });
      // }
      console.log("Order Updated");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error updating the order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteOrder = async () => {
    setIsDeleting(true);
    try {
      // const result = await deleteOrder(formData.orderNo);
      // if (result.success) {
      //   toast({
      //     title: "Order Deleted",
      //     description: "The order has been successfully deleted.",
      //   });
      //   // In a real app, you would redirect to an order list page here
      // }
      console.log("Order Deleted");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error deleting the order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-b from-white to-gray-50/50">
      <CardHeader className="space-y-1 pb-8 border-b">
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          Manage Order: {formData.orderNo}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              Customer Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Customer Name</Label>
                <Input
                  id="name"
                  value={formData.customerDetails.name}
                  onChange={(e) =>
                    handleCustomerDetailsChange("name", e.target.value)
                  }
                  className="transition-all focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Customer Mobile</Label>
                <Input
                  id="mobile"
                  value={formData.customerDetails.mobile}
                  onChange={(e) =>
                    handleCustomerDetailsChange("mobile", e.target.value)
                  }
                  className="transition-all focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Customer Address</Label>
              <Textarea
                id="address"
                value={formData.customerDetails.address}
                onChange={(e) =>
                  handleCustomerDetailsChange("address", e.target.value)
                }
                className="min-h-[100px] transition-all focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryAddress">Delivery Address</Label>
              <Textarea
                id="deliveryAddress"
                value={formData.customerDetails.deliveryAddress}
                onChange={(e) =>
                  handleCustomerDetailsChange("deliveryAddress", e.target.value)
                }
                className="min-h-[100px] transition-all focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expectedDeliveryDate">
                  Expected Delivery Date
                </Label>
                <Input
                  id="expectedDeliveryDate"
                  type="date"
                  value={formData.customerDetails.expectedDeliveryDate}
                  onChange={(e) =>
                    handleCustomerDetailsChange(
                      "expectedDeliveryDate",
                      e.target.value
                    )
                  }
                  className="transition-all focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salesPerson">Sales Person</Label>
                <Select
                  value={formData.customerDetails.salesPerson}
                  onValueChange={(value) =>
                    handleCustomerDetailsChange("salesPerson", value)
                  }
                >
                  <SelectTrigger
                    id="salesPerson"
                    className="transition-all focus:ring-2 focus:ring-primary/50"
                  >
                    <SelectValue placeholder="Select sales person" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aditya">Aditya</SelectItem>
                    <SelectItem value="john">John</SelectItem>
                    <SelectItem value="sarah">Sarah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-primary">Products</h3>
              <Button
                type="button"
                onClick={handleAddProduct}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>
            <AnimatePresence>
              {formData.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-4 mb-4 relative">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-100"
                      onClick={() => handleRemoveProduct(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`productName-${index}`}>
                          Product Name
                        </Label>
                        <Input
                          id={`productName-${index}`}
                          value={product.productName}
                          onChange={(e) =>
                            handleProductChange(
                              index,
                              "productName",
                              e.target.value
                            )
                          }
                          className="transition-all focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`size-${index}`}>Size</Label>
                        <Input
                          id={`size-${index}`}
                          value={product.size}
                          onChange={(e) =>
                            handleProductChange(index, "size", e.target.value)
                          }
                          className="transition-all focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`batchNo-${index}`}>Batch No</Label>
                        <Input
                          id={`batchNo-${index}`}
                          value={product.batchNo}
                          onChange={(e) =>
                            handleProductChange(
                              index,
                              "batchNo",
                              e.target.value
                            )
                          }
                          className="transition-all focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`quantity-${index}`}>Quantity</Label>
                        <Input
                          id={`quantity-${index}`}
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            handleProductChange(
                              index,
                              "quantity",
                              Number(e.target.value)
                            )
                          }
                          className="transition-all focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center pt-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-600"
                >
                  Delete Order
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the order and remove the data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteOrder}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Order
                      </>
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Button
              onClick={handleUpdateOrder}
              disabled={isUpdating}
              className="min-w-[120px] bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
            >
              {isUpdating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Order"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
