"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";
import Lottie from "lottie-react";
import robotAnimation from "./robot-repair.json";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4 mt-32">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-full max-w-md mx-auto mb-8">
          <Lottie animationData={robotAnimation} loop={true} className="bg-black"/>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
          Something went wrong!
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Don't worry! Our robot is already working on fixing the issue.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={reset}
            size="lg"
            variant="outline"
            className="gap-2 border text-black"
          >
            <RefreshCcw className="h-5 w-5" />
            Try Again
          </Button>

          <Link href="/">
            <Button size="lg" className="gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}