"use client";

import { useState } from "react";
import { PipetteIcon as  Lock, Mail, ArrowLeft, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const routes = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //  authentication logic
    routes.push('/admin')
    console.log("Login attempted with:", email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4 relative">
      <Link href="/" className="absolute left-5 top-16">
        <Button className="mt-8 bg-white text-black shadow-md border hover:bg-main">
          <ArrowLeft className="mr-2 h-4 w-4 text-black" />
          Back to Home
        </Button>
      </Link>
      <Card className="w-full max-w-md ">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-center">
            <div className="bg-primary rounded-full p-3">
              <UserRound className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <div className="flex items-center justify-between w-full text-sm">
              <Button variant="link" className="px-0">
                Forgot password?
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
