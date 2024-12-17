import "./App.css";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  useEffect(() => {
    toast.success("Hello");
  }, []);
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomeLayout />} />
      {/* <Route path="/signin" element={<SignIn />} /> */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
