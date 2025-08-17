'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import iPEK from "@/assets/products/iPEK/Ipek.webp"
import wincan from "@/assets/products/wincan/wincan.png"
import enz from "@/assets/products/enz/EnzCam.png"
import ims from "@/assets/products/ims/ims Robotics.png"
import dietmarkaiser from "@/assets/products/dietmarkaiser/DYNA Combi.jpg"
import envirobot from "@/assets/products/envirobot/viper.png"
import sortimo from "@/assets/products/sortimo/sortimo.jpg"
import falch from "@/assets/products/flach/falch.jpg"
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "iPEK",
    description: "High-definition camera inspection for detailed pipe assessment",
    image: iPEK,
    link: "/products/iPEK"
  },
  {
    id: 2,
    title: "WinCan",
    description: "WinCan is the industry's preferred sewer inspection software, with an installed base of more than 8,500 licenses worldwide.",
    image: wincan,
    link: "/products/wincan"
  },
  {
    id: 3,
    title: "enz®",
    description: "Innovative solutions for surface, tube, sewer and pipe cleaning. Top standards for top satisfaction. Enz® technik ag has brought innovations to the water jetting Solutions",
    image: enz,
    link: "/products/enz"
  },
  {
    id: 4,
    title: "Dietmarkaiser",
    description: "The proven combination of pumps, components and assemblies from our own production make the DYNA Combi unique.",
    image: dietmarkaiser,
    link: "/products/dietmarkaiser"
  },
  {
    id: 5,
    title: "IMS ROBOTICS",
    description: "Whether stand-alone, mobile and permanently installed, we supply our modulary designed UV technology entirely according to your requirements.",
    image: ims,
    link: "/products/ims"
  },
  {
    id: 6,
    title: "Envirobot",
    description: "Envirobot offers you an uncomplicated complete solution with the steerable HD flush camera VIPER",
    image: envirobot,
    link: "/products/envirobot"
  },
  {
    id: 7,
    title: "Sortimo",
    description: "Sortimo van storage is far more than just a shelf in the load area of the transporter. Because Sortimo offers solutions for more productivity, improved profitability and happy employees, company owners and, above all, customers. With van shelving from Sortimo there is the right solution for almost every vehicle brand. ",
    image: sortimo,
    link: "/products/sortimo"
  },
   {
    id: 8,
    title: "Falch",
    description: "Water Jetting MachinesFalch specializes in professional water jetting machines, covering a spectrum from compact mobile units to robust industrial-grade systems. Our portfolio includes:Wheel JetsBase JetsTrail JetsTruck- and Container-Mounted JetsThese systems are designed to handle high-pressure cleaning, removal, and surface restoration tasks.",
    image: falch,
    link: "/products/falch"
  },
];

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return <Loading message="Loading our products..." size="lg" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-drakGray to-slate-100 py-28 pt-12 mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="text-center mb-12 bg-sub py-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-300 mb-4">
            OUR PRODUCTS
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-gray-100">
            Comprehensive pipe inspection and maintenance services using cutting-edge Technology
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Link href={product.link} className="group">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                      <div className="relative h-48 w-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {product.title}
                        </CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto">
                        <Button variant="ghost" className="w-full bg-black text-white hover:bg-main">
                          Learn More
                          <span className="sr-only">{product.title}</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}