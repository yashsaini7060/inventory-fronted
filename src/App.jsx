import { useEffect } from "react";
import toast from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

// import { ManageOrderForm } from "./components/Forms/ManageOrderForm";
// import { ProductForm } from "./components/Forms/ProductForm";
// import { OrderSummary } from "./components/OrderSummary";
import HomeLayout from "./layouts/HomeLayout";
// import Auth from "./pages/Auth/Auth";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddInventoryPage from "./pages/Inventory/AddInventoryPage";
import DeleteInventoryForm from "./pages/Inventory/DeleteInventoryForm";
import InventoryListPage from "./pages/Inventory/InventoryListPage";
// import Sidebar from "./pages/Inventory/Sidebar";
import NotFound from "./pages/NotFound";
import CreateOrderPage from "./pages/Orders/CreateOrderPage";
// import { CustomerDetailsForm } from "./components/Forms/CustomerDetailsForm";
import ManageOrderPage from "./pages/Orders/ManageOrderPage";
import Orders from "./pages/Orders/Orders";
function App() {
  useEffect(() => {
    toast.success("Hello");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomeLayout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <HomeLayout
            breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}
          >
            <Dashboard />
          </HomeLayout>
        }
      />

      {/* Inventory Routes */}
      <Route
        path="/inventory"
        element={
          <HomeLayout
            breadcrumbs={[{ label: "Inventory", href: "/inventory" }]}
          >
            <InventoryListPage />
          </HomeLayout>
        }
      />

      <Route
        path="/inventory/additem"
        element={
          <HomeLayout
            breadcrumbs={[
              { label: "Inventory", href: "/inventory" },
              { label: "Add Item", href: "/inventory/additem" },
            ]}
          >
            <AddInventoryPage />
          </HomeLayout>
        }
      />
      <Route
        path="/inventory/deleteitem"
        element={
          <HomeLayout
            breadcrumbs={[
              { label: "Inventory", href: "/inventory" },
              { label: "Delete Item", href: "/inventory/deleteitem" },
            ]}
          >
            <DeleteInventoryForm />
          </HomeLayout>
        }
      />

      {/* Orders Routes */}

      <Route
        path="/orders"
        element={
          <HomeLayout breadcrumbs={[{ label: "Orders", href: "/orders" }]}>
            <Orders />
          </HomeLayout>
        }
      />
      <Route
        path="/orders/add"
        element={
          <HomeLayout
            breadcrumbs={[
              { label: "Orders", href: "/orders" },
              { label: "Add Orders", href: "/orders/add" },
            ]}
          >
            <CreateOrderPage />
          </HomeLayout>
        }
      />
      <Route
        path="/orders/update"
        element={
          <HomeLayout
            breadcrumbs={[
              { label: "Orders", href: "/orders" },
              { label: "Update Order", href: "/orders/update" },
            ]}
          >
            {/* <ManageOrderForm /> */}
            <ManageOrderPage />
            {/* <h1>Update Order</h1> */}
          </HomeLayout>
        }
      />

      {/* Dispatch Routes */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
