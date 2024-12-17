import "./App.css";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
function App() {
  useEffect(() => {
    toast.success("Hello");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<HomeLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
