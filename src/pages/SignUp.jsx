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
import { createAccount } from "@/redux/slices/authSlice";
import { signUpSchema } from "@/schemas/authSchemas";
import { validateForm } from "@/utils/validation";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
    confirmPassword: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    const { isValid, errors } = validateForm(signUpSchema, signUpData);
    if (!isValid) {
      Object.values(errors).forEach((errorMessage) => {
        toast.error(errorMessage);
      });
      return;
    }

    const response = await dispatch(createAccount(signUpData));
    if (response?.payload?.success) {
      navigate("/signin");
      setSignUpData({
        fullName: "",
        email: "",
        password: "",
        role: "user",
        confirmPassword: "",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Create a new account or{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              sign in to existing one
            </Link>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onFormSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  name="fullName"
                  id="fullname"
                  type="text"
                  placeholder="John Michael Doe"
                  required
                  value={signUpData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  name="email"
                  id="signup-email"
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="email"
                  required
                  value={signUpData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  name="password"
                  id="signup-password"
                  placeholder="Create a password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={signUpData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="signup-confirm-password">
                  Confirm Password
                </Label>
                <Input
                  name="confirmPassword"
                  id="signup-confirm-password"
                  placeholder="Confirm your password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={signUpData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-4 px-0">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
