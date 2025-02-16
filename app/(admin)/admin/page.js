"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
} from "lucide-react";

const metrics = [
  { title: "Clients", value: 75, amount: "$24,563" },
  { title: "Projects", value: 85, amount: "1,234" },
  { title: "Conversion Rate", value: 65, amount: "65%" },
  { title: "New Orders", value: 45, amount: "156" },
  { title: "Customer Growth", value: 90, amount: "+22%" },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: Users, label: "Customers", href: "#" },
  { icon: ShoppingCart, label: "Orders", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function AdminPanel() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading
  useState(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`${
          isExpanded ? "w-64" : "w-20"
        } bg-card border-r transition-all duration-300 p-4 flex flex-col ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-12 w-12 mb-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          {isExpanded && (
            <div className="text-center animate-fade-in">
              <h2 className="font-semibold">Shenzor</h2>
              <p className="text-sm text-muted-foreground">Administrator</p>
            </div>
          )}
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg hover:bg-accent transition-colors ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <item.icon className="h-5 w-5" />
                  {isExpanded && (
                    <span className="ml-3 animate-fade-in">{item.label}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto self-end"
        >
          {isExpanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div
          className={`flex justify-end items-center mb-8 ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <Button variant="ghost" size="icon" className="mr-2">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className={`p-6 relative overflow-hidden ${
                isLoaded ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative z-10">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {metric.title}
                </h3>
                <p className="text-2xl font-bold mb-4">{metric.amount}</p>
                <Progress value={metric.value} className="h-2" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-8 border-primary/10"
                style={{
                  clipPath: `circle(70% at 50% 50%)`,
                }}
              />
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}