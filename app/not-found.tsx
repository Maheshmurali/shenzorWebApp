"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Lottie from "lottie-react";
import robotAnimation from "./robot-repair.json";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-full max-w-md mx-auto mb-8">
          <Lottie animationData={robotAnimation} loop={true} />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for seems to have gone down for maintenance. Our robot is working hard to fix it!
        </p>

        <Link href="/">
          <Button size="lg" className="gap-2">
            <Home className="h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}