'use client';
import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, Zap, Eye, Wrench,} from "lucide-react";
import { partnerProducts } from "@/lib/data";

export default function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const [isLoading, setIsLoading] = useState(true);
  const [partner, setPartner] = useState<any>(null);
  
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const partnerData = partnerProducts[resolvedParams.slug as keyof typeof partnerProducts];
      if (partnerData) {
        setPartner(partnerData);
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resolvedParams.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-main border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-lg font-medium"
          >
            Loading product information...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (!partner) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-drakGray">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-drakGray py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 py-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2 border rounded-full "/>
            
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white p-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
            
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                {partner.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                {partner.description}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-16"
        >
          {partner.products.map((product: any, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="relative h-80 lg:h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={product.width}
                      height={product.height}
                      className="absolute md:left-16 md:top-4 lg:top-24 lg:left-16 rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-8 lg:p-12">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-3xl font-bold text-white mb-4  transition-colors">
                        {product.name}
                      </CardTitle>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {product.description}
                      </p>
                    </CardHeader>

                    <CardContent className="px-0 space-y-8">
                      {/* Key Features */}
                      <div>
                        <div className="flex items-center mb-4">
                          <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                          <h3 className="text-xl font-semibold text-white">Key Features</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {product.keyFeatures.map((feature: string, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                              className="flex items-center text-slate-300"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <Separator className="bg-white/20" />

                      {/* Specifications 
                      <div>
                        <div className="flex items-center mb-4">
                          <Settings className="w-6 h-6 text-blue-400 mr-3" />
                          <h3 className="text-xl font-semibold text-white">Technical Specifications</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {Object.entries(product.specifications).map(([key, value], idx) => (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.2 + index * 0.2 + idx * 0.1 }}
                              className="bg-white/5 rounded-lg p-4 border border-white/10"
                            >
                              <dt className="text-sm font-medium text-slate-400 mb-1">{key}</dt>
                              <dd className="text-white font-semibold">{value}</dd>
                            </motion.div>
                          ))}
                        </div>
                      </div>*/}

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.2 }}
                        className="flex flex-col md:flex-row gap-4 pt-4 justify-center align-middle items-center"
                      >
                        <Link href='/about#contact'>
                        <Button className="bg-black hover:bg-main text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                          <Eye className="w-5 h-5 mr-2" />
                          Request Demo
                        </Button>
                        </Link>
                        <Link href='/sign-in'>
                        <Button variant="outline" className="border-white/30 text-black hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                          <Wrench className="w-5 h-5 mr-2" />
                          Technical Support
                        </Button>
                        </Link>
                      </motion.div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}