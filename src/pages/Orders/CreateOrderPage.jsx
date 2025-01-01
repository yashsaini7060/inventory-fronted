import { Loader2 } from "lucide-react";
import { useState } from "react";

// import { submitOrder } from "@/actions/order";
import { CustomerDetailsForm } from "@/components/Forms/CustomerDetailsForm";
import { ProductForm } from "@/components/Forms/ProductForm";
import { OrderSummary } from "@/components/OrderSummary";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { useToast } from "../../components/ui/use-toast";
import { useToast } from "@/hooks/use-toast";
// import { CustomerDetails, OrderData, ProductItem } from "@/types/order";

export default function OrderPage() {
  const [step, setStep] = useState(1);
  const [showProductForm, setShowProductForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [orderData, setOrderData] = useState({
    customerDetails: {
      name: "",
      mobile: "",
      address: "",
      deliveryAddress: "",
      expectedDeliveryDate: "",
      salesPerson: "",
    },
    products: [],
    orderNo: "",
    orderDate: new Date().toISOString().split("T")[0],
  });

  const handleCustomerDetailsSubmit = (data) => {
    setOrderData((prev) => ({
      ...prev,
      customerDetails: data,
    }));
    setStep(2);
  };

  const handleProductSubmit = (product) => {
    setOrderData((prev) => ({
      ...prev,
      products: [...prev.products, product],
    }));
    setShowProductForm(false);
    toast({
      title: "Product Added",
      description: "The product has been added to your order.",
    });
  };

  const handleRemoveProduct = (index) => {
    setOrderData((prev) => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }));
    toast({
      title: "Product Removed",
      description: "The product has been removed from your order.",
      variant: "destructive",
    });
  };

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    try {
      // const result = await submitOrder(orderData);
      // if (result.success) {
      //   setOrderData((prev) => ({
      //     ...prev,
      //     orderNo: result.orderNo,
      //   }));
      //   toast({
      //     title: "Order Submitted",
      //     description: "Your order has been successfully submitted.",
      //     variant: "default",
      //   });
      // }
      console.log("asyn request");
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error submitting your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          Company Name
        </h1>

        <div className="max-w-7xl mx-auto">
          {step === 1 && (
            <CustomerDetailsForm
              onSubmit={handleCustomerDetailsSubmit}
              initialData={orderData.customerDetails}
            />
          )}

          {step === 2 && (
            <div className="space-y-6">
              <OrderSummary
                data={orderData}
                onAddProduct={() => setShowProductForm(true)}
                onRemoveProduct={handleRemoveProduct}
              />

              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="min-w-[100px] hover:shadow-md transition-all"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmitOrder}
                  disabled={orderData.products.length === 0 || isSubmitting}
                  className="min-w-[100px] bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Order"
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>

        <Dialog open={showProductForm} onOpenChange={setShowProductForm}>
          <DialogContent className="sm:max-w-[500px]">
            <ProductForm
              onSubmit={handleProductSubmit}
              onClose={() => setShowProductForm(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
