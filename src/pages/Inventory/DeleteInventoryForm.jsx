"use client";

import { BarChart2, DollarSign, Loader2, Package } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import DeleteInventoryItem from "./DeleteInventoryItem";

const initialInventoryItems = [
  {
    id: "1",
    name: "Widget X",
    quantity: 50,
    price: 19.99,
    category: "Electronics",
  },
  {
    id: "2",
    name: "Gadget Y",
    quantity: 30,
    price: 29.99,
    category: "Accessories",
  },
  { id: "3", name: "Tool Z", quantity: 20, price: 39.99, category: "Hardware" },
  {
    id: "4",
    name: "Component A",
    quantity: 100,
    price: 9.99,
    category: "Electronics",
  },
  {
    id: "5",
    name: "Accessory B",
    quantity: 75,
    price: 14.99,
    category: "Accessories",
  },
  {
    id: "6",
    name: "Instrument C",
    quantity: 15,
    price: 149.99,
    category: "Hardware",
  },
];

export default function DeleteInventoryForm() {
  const [filteredItems, setFilteredItems] = useState(initialInventoryItems);
  const isLoading = false;

  const handleDelete = (itemId) => {
    const updatedItems = filteredItems.filter((item) => item.id !== itemId);
    setFilteredItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Inventory Management
        </h1>
        <Card className="mb-8">
          <CardContent className="pt-6">
            {/* <InventoryControls onSearch={handleSearch} onRefresh={fetchInventoryItems} isLoading={isLoading} /> */}
          </CardContent>
        </Card>
        <ScrollArea className="h-[calc(100vh-300px)]">
          {isLoading ? (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
              <span className="ml-2 text-lg text-gray-500">
                Loading inventory...
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardHeader className="bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-semibold">
                        {item.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-sm">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-gray-600">
                        <Package className="w-5 h-5 mr-2 text-blue-500" />
                        <span>
                          Quantity:{" "}
                          <span className="font-semibold">{item.quantity}</span>
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                        <span>
                          Price:{" "}
                          <span className="font-semibold">
                            ${item.price.toFixed(2)}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <BarChart2 className="w-5 h-5 mr-2 text-purple-500" />
                      <span>
                        Total Value:{" "}
                        <span className="font-semibold">
                          ${(item.quantity * item.price).toFixed(2)}
                        </span>
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 flex justify-end">
                    <DeleteInventoryItem
                      itemId={item.id}
                      itemName={item.name}
                      onDelete={() => handleDelete(item.id)}
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
      {/* <Toaster /> */}
    </div>
  );
}
