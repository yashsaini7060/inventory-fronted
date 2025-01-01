"use client";

// import { CustomerDetails } from '../types/order'
import { motion } from "framer-motion";
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
import { Textarea } from "@/components/ui/textarea";

// interface CustomerDetailsFormProps {
//   onSubmit: (data: CustomerDetails) => void
//   initialData?: CustomerDetails
// }

export function CustomerDetailsForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      mobile: "",
      address: "",
      deliveryAddress: "",
      expectedDeliveryDate: "",
      salesPerson: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-b from-white to-gray-50/50">
        <CardHeader className="space-y-1 pb-8 border-b">
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
            Customer Details
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Please fill in the customer information below
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Customer Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="transition-shadow focus:shadow-md"
                  placeholder="Enter customer name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-sm font-medium">
                  Customer Mobile
                </Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  className="transition-shadow focus:shadow-md"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Customer Address
              </Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="min-h-[100px] transition-shadow focus:shadow-md resize-none"
                placeholder="Enter customer address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliveryAddress" className="text-sm font-medium">
                Delivery Address
              </Label>
              <Textarea
                id="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={(e) =>
                  setFormData({ ...formData, deliveryAddress: e.target.value })
                }
                className="min-h-[100px] transition-shadow focus:shadow-md resize-none"
                placeholder="Enter delivery address"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="expectedDeliveryDate"
                  className="text-sm font-medium"
                >
                  Expected Delivery Date
                </Label>
                <Input
                  id="expectedDeliveryDate"
                  type="date"
                  value={formData.expectedDeliveryDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      expectedDeliveryDate: e.target.value,
                    })
                  }
                  className="transition-shadow focus:shadow-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salesPerson" className="text-sm font-medium">
                  Sales Person
                </Label>
                <Select
                  value={formData.salesPerson}
                  onValueChange={(value) =>
                    setFormData({ ...formData, salesPerson: value })
                  }
                >
                  <SelectTrigger className="transition-shadow focus:shadow-md">
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

            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                className="min-w-[120px] bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
              >
                Next Step
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
