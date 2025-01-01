import { ManageOrderForm } from "@/components/Forms/ManageOrderForm";
// import { Navigation } from "@/components/navigation";
// import { OrderData } from "@/types/order";

// This is a mock function to fetch order data. In a real app, you would fetch this from your database.
// async function getOrderData(orderId) {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   // Mock data
//   return {
//     orderNo: orderId,
//     orderDate: "2023-06-15",
//     customerDetails: {
//       name: "John Doe",
//       mobile: "1234567890",
//       address: "123 Main St, City, Country",
//       deliveryAddress: "456 Elm St, City, Country",
//       expectedDeliveryDate: "2023-06-20",
//       salesPerson: "aditya",
//     },
//     products: [
//       {
//         productName: "Altroz Blanco Décor",
//         size: "12X12",
//         batchNo: "5230830",
//         quantity: 10,
//         unitType: "Box",
//       },
//     ],
//   };
// }
// { params }
export default function ManageOrderPage() {
  // const orderData = await getOrderData("ORD001");
  const orderData = {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          Manage Order
        </h1>
        <ManageOrderForm initialData={orderData} />
      </div>
    </div>
  );
}
