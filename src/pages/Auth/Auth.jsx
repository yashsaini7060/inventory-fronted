// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createAccount } from "@/redux/slices/authSlice";
import { signInSchema, signUpSchema } from "@/schemas/authSchemas";
import { validateForm } from "@/utils/validation";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState("signin");
  // console.log(tab);
  // State variables for form data
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
    confirmPassword: "",
  });

  function handleInputChange(e, formType) {
    const { name, value } = e.target;
    if (formType === "signin") {
      setSignInData((prevData) => ({ ...prevData, [name]: value }));
    } else if (formType === "signup") {
      setSignUpData((prevData) => ({ ...prevData, [name]: value }));
    }
  }

  //On form submissions
  async function onFormSubmit(e) {
    e.preventDefault();
    // Add your form submission logic here

    if (tab === "signin") {
      const { isValid, errors } = validateForm(signInSchema, signInData);
      if (!isValid) {
        console.log(errors);
        Object.values(errors).forEach((errorMessage) => {
          toast.error(errorMessage);
        });
        return;
      }

      // Handle sign-in logic here
    } else {
      //Validating signup values here
      const { isValid, errors } = validateForm(signUpSchema, signUpData);
      if (!isValid) {
        Object.values(errors).forEach((errorMessage) => {
          toast.error(errorMessage);
        });
        return;
      }

      // Handle sign-up logic here
      const response = await dispatch(createAccount(signUpData));
      console.log(response);
      if (response?.payload?.success) {
        navigate("/");
        setSignUpData({
          fullName: "",
          email: "",
          password: "",
          role: "user",
          confirmPassword: "",
        });
      }
      setTab("signin");
    }
  }
  // const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  // const role = useSelector((state) => state?.auth.role);

  // function onLogout(e) {
  //   e.preventDefault();
  //   navigate("/");
  // }

  // function onSignIn(e) {
  //   e.preventDefault();
  //   navigate("/");
  // }

  // async function onFormSubmit(e) {
  //   e.preventDefault();

  //   // const response = await dispatch(createAccount(signupDetails));
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            Sign in to your account or create a new one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
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
                      onChange={(e) => handleInputChange(e, "signin")}
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
                      onChange={(e) => handleInputChange(e, "signin")}
                    />
                  </div>
                </div>
                <CardFooter className="flex justify-between mt-4 px-0">
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            <TabsContent value="signup">
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
                      onChange={(e) => handleInputChange(e, "signup")}
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
                      onChange={(e) => handleInputChange(e, "signup")}
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
                      onChange={(e) => handleInputChange(e, "signup")}
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
                      onChange={(e) => handleInputChange(e, "signup")}
                    />
                  </div>
                </div>
                <CardFooter className="flex justify-between mt-4 px-0">
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default Auth;
