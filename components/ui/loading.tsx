"use client";

import { motion } from "framer-motion";

interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "overlay";
}

export function Loading({ 
  message = "Loading...", 
  size = "md",
  variant = "default" 
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16", 
    lg: "w-24 h-24"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl"
  };

  const containerClasses = variant === "overlay" 
    ? "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
    : "min-h-screen bg-black flex items-center justify-center";

  return (
    <div className={containerClasses}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={`${sizeClasses[size]} border-4 border-main border-t-transparent rounded-full mx-auto mb-4`}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-white ${textSizes[size]} font-medium`}
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  );
}

export function LoadingSpinner({ 
  size = "md", 
  className = "" 
}: { 
  size?: "sm" | "md" | "lg"; 
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full ${className}`}
    />
  );
}