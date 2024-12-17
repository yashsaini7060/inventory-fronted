import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/redux/slices/authSlice";
import { signInSchema } from "@/schemas/authSchemas";
import { validateForm } from "@/utils/validation";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    const { isValid, errors } = validateForm(signInSchema, signInData);
    if (!isValid) {
      Object.values(errors).forEach((errorMessage) => {
        toast.error(errorMessage);
      });
      return;
    }
    // Handle sign-in logic here
    console.log(signInData);
    const response = await dispatch(login(signInData));
    if (response?.payload?.success) {
      navigate("/home");
      setSignInData({
        email: "",
        password: "",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your account or{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              create a new one
            </Link>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onFormSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="signin-email">Email</Label>
                <Input
                  name="email"
                  id="signin-email"
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="email"
                  required
                  value={signInData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="signin-password">Password</Label>
                <Input
                  name="password"
                  id="signin-password"
                  placeholder="Enter your password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={signInData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-4 px-0">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
