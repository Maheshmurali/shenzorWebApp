'use client'
import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, PipetteIcon as  Search, Activity, Settings } from "lucide-react";
import img1 from "@/assets/image1.jpg"
import img2 from "@/assets/image2.jpg"
import img3 from "@/assets/image3.jpg"
import img4 from "@/assets/image4.png"
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "CCTV Pipeline Inspection",
    description: "High-definition camera inspection for detailed pipe assessment",
    image: img1,
    icon: Camera,
    link: "/products/cctv-inspection"
  },
  {
    id: 2,
    title: "Leak Detection Services",
    description: "Advanced acoustic leak detection and pressure testing",
    image: img2,
    icon: Search,
    link: "/products/leak-detection"
  },
  {
    id: 3,
    title: "Pipeline Maintenance",
    description: "Preventive maintenance and repair services",
    image: img3,
    icon: Settings,
    link: "/products/maintenance"
  },
  {
    id: 4,
    title: "Emergency Response",
    description: "24/7 emergency pipeline inspection and repair",
    image: img4,
    icon: Activity,
    link: "/products/emergency"
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 pt-12 mt-6">
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
         <div className="text-center mb-12 bg-sub py-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-300 mb-4">
            <span className="text-main">O</span>ur Services & Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive pipe inspection and maintenance services using cutting-edge technology
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link href={product.link} key={product.id} className="group">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Button variant="ghost" className="w-full group-hover:bg-primary/5 hover:bg-main ">
                      Learn More
                      <span className="sr-only">{product.title}</span>
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
    </div>
  );
}