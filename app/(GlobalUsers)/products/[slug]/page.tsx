"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import img1 from "@/assets/image1.jpg"
import img2 from "@/assets/image2.jpg"
import img3 from "@/assets/image3.jpg"
import img4 from "@/assets/image4.png"
import {
  Camera,
  PipetteIcon as PipeIcon,
  Shield,
  Search,
  Activity,
  Settings,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const products = {
  "cctv-inspection": {
    title: "CCTV Pipeline Inspection",
    description:
      "High-definition camera inspection for detailed pipe assessment",
    image: img1,
    icon: Camera,
    fullDescription:
      "Our CCTV Pipeline Inspection service utilizes state-of-the-art camera technology to provide detailed visual assessments of your pipeline infrastructure. This non-invasive method allows us to identify issues such as cracks, blockages, corrosion, and structural defects without any excavation.",
    features: [
      "High-definition video recording",
      "Real-time monitoring and assessment",
      "Detailed inspection reports",
      "Digital documentation and archiving",
      "Non-destructive inspection method",
      "Immediate problem identification",
    ],
    benefits: [
      "Prevent costly repairs through early detection",
      "Minimize disruption to operations",
      "Accurate diagnosis of pipeline issues",
      "Cost-effective maintenance planning",
      "Compliance with regulatory requirements",
    ],
  },
  "leak-detection": {
    title: "Leak Detection Services",
    description: "Advanced acoustic leak detection and pressure testing",
    image: img2,
    icon: Search,
    fullDescription:
      "Our advanced Leak Detection Services combine acoustic technology with pressure testing to accurately locate and assess pipeline leaks. We use sophisticated equipment to detect even the smallest leaks, helping prevent water waste and potential infrastructure damage.",
    features: [
      "Acoustic leak detection technology",
      "Pressure testing capabilities",
      "Non-invasive detection methods",
      "Precise leak location identification",
      "Comprehensive system analysis",
      "Emergency response available",
    ],
    benefits: [
      "Reduce water loss and associated costs",
      "Prevent property damage",
      "Minimize environmental impact",
      "Extend pipeline infrastructure life",
      "Improve system efficiency",
    ],
  },
  maintenance: {
    title: "Pipeline Maintenance",
    description: "Preventive maintenance and repair services",
    image: img3,
    icon: Settings,
    fullDescription:
      "Our comprehensive Pipeline Maintenance service ensures your pipeline infrastructure remains in optimal condition. We provide regular inspections, cleaning, and preventive maintenance to extend the life of your systems and prevent costly emergencies.",
    features: [
      "Scheduled maintenance programs",
      "Pipeline cleaning services",
      "Repair and replacement",
      "System optimization",
      "Preventive maintenance planning",
      "24/7 support availability",
    ],
    benefits: [
      "Extend system lifespan",
      "Reduce emergency repairs",
      "Optimize system performance",
      "Lower long-term costs",
      "Ensure regulatory compliance",
    ],
  },
  emergency: {
    title: "Emergency Response",
    description: "24/7 emergency pipeline inspection and repair",
    image: img4,
    icon: Activity,
    fullDescription:
      "Our Emergency Response team is available 24/7 to address urgent pipeline issues. We provide rapid response times and efficient solutions to minimize downtime and prevent further damage to your infrastructure.",
    features: [
      "24/7 availability",
      "Rapid response times",
      "Emergency repair capabilities",
      "Mobile inspection units",
      "Temporary and permanent solutions",
      "Priority scheduling",
    ],
    benefits: [
      "Minimize downtime",
      "Prevent further damage",
      "Protect property and assets",
      "Reduce repair costs",
      "Peace of mind",
    ],
  },
  assessment: {
    title: "Infrastructure Assessment",
    description: "Comprehensive pipeline infrastructure evaluation",
    image: img3,
    icon: Shield,
    fullDescription:
      "Our Infrastructure Assessment service provides a thorough evaluation of your entire pipeline system. We analyze current conditions, identify potential issues, and develop comprehensive maintenance and upgrade strategies.",
    features: [
      "Complete system evaluation",
      "Risk assessment",
      "Condition mapping",
      "Asset management planning",
      "Regulatory compliance review",
      "Future needs analysis",
    ],
    benefits: [
      "Informed decision-making",
      "Long-term cost savings",
      "Improved system reliability",
      "Regulatory compliance",
      "Strategic planning support",
    ],
  },
  specialized: {
    title: "Specialized Inspections",
    description: "Custom inspection solutions for complex pipeline systems",
    image: img4,
    icon: PipeIcon,
    fullDescription:
      "Our Specialized Inspections service offers customized solutions for complex pipeline systems. We utilize advanced technology and specialized equipment to address unique inspection challenges and provide detailed assessments.",
    features: [
      "Custom inspection protocols",
      "Advanced technology utilization",
      "Complex system expertise",
      "Detailed documentation",
      "Specialized equipment",
      "Expert analysis",
    ],
    benefits: [
      "Tailored solutions",
      "Comprehensive assessment",
      "Expert recommendations",
      "Detailed reporting",
      "Technical compliance",
    ],
  },
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Product Not Found
          </h1>
          <Link href="/products">
            <Button className="mt-8">
              <ArrowLeft className="mr-2 h-4 w-4 text-black" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products">
            <Button
              variant="ghost"
              className="mb-8 text-black border border-black hover:bg-main "
            >
              <ArrowLeft className="mr-2 h-4 w-4 text-black " />
              Back to Products
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative h-[400px] lg:h-[600px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.fullDescription}
                </p>

                <Card className="mb-8 p-6">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <div className="mt-8 flex gap-4">
                  <Link href='/login'>
                    <Button size="lg">Request Service</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
