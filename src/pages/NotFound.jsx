import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[380px] max-w-[90vw]">
        <CardContent className="pt-6 text-center">
          <div className="space-y-2">
            <h1 className="text-7xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold tracking-tight">
              Page Not Found
            </h2>
            <p className="text-sm text-muted-foreground">
              We couldn&apos;t find the page you were looking for.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/">Go Back Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
