import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { inventoryFormSchema } from "@/schemas/inventorySchemas";

function AddInventoryPage() {
  const form = useForm({
    resolver: zodResolver(inventoryFormSchema),
    defaultValues: {
      productName: "",
      productCode: "",
      productSize: "",
      partCode: "",
      itemDescription: "",
      units: 0,
      taxPercentage: 0,
      unitCost: 0,
      quantity: 0,
      amount: 0,
      noOfTrans: 0,
      lastRecvDt: null,
      ageing: 0,
      opStockForTesting: 0,
      remark: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            Add New Inventory Item
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter the details for the new inventory item.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product name" {...field} />
                      </FormControl>
                      {form.formState.errors.productName && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.productName.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                {/* Product Code */}
                <FormField
                  control={form.control}
                  name="productCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product code" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Product Size */}
                <FormField
                  control={form.control}
                  name="productSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Size</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product size" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Part Code */}
                <FormField
                  control={form.control}
                  name="partCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Part Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter part code" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Item Description */}
                <FormField
                  control={form.control}
                  name="itemDescription"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Item Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter item description"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Units */}
                <FormField
                  control={form.control}
                  name="units"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Units</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Tax Percentage */}
                <FormField
                  control={form.control}
                  name="taxPercentage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tax Percentage</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Unit Cost */}
                <FormField
                  control={form.control}
                  name="unitCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit Cost</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Quantity */}
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Amount */}
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Number of Transactions */}
                <FormField
                  control={form.control}
                  name="noOfTrans"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Transactions</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Last Received Date */}
                <FormField
                  control={form.control}
                  name="lastRecvDt"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Last Received Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                {/* Ageing */}
                <FormField
                  control={form.control}
                  name="ageing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ageing</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Opening Stock for Testing */}
                <FormField
                  control={form.control}
                  name="opStockForTesting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opening Stock for Testing</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Remark */}
                <FormField
                  control={form.control}
                  name="remark"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Remark</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter any remarks" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddInventoryPage;
