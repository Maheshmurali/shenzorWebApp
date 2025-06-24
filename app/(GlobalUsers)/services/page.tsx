"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loading } from "@/components/ui/loading";
import { Settings, Search, FileText, Award} from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
const services = [
  {
    icon: Search,
    title: "Inspection Services",
    description: "Comprehensive pipeline inspection using advanced robotics technology",
    features: [
      "Visual inspection",
      "Defect detection",
      "Condition assessment",
      "Real-time monitoring"
    ]
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Regular maintenance and preventive care for Inspection Units",
    features: [
      "Scheduled maintenance",
      "Emergency repairs",
      "System upgrades",
      "Performance optimization"
    ]
  },
  {
    icon: FileText,
    title: "Reporting",
    description: "Detailed analysis and documentation of inspection results",
    features: [
      "Comprehensive reports",
      "Data analysis",
      "Recommendations",
      "Digital documentation"
    ]
  },
  {
    icon: Award,
    title: "Training & Certification",
    description: "Training & Certification Of Advanced Inspection Systems",
    features: [
      "Friendly Enviroment",
      "Expert Engineers",
      "Remote Assistance",
      "Priority Support"
    ]
  },
];

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return <Loading message="Fetching Services...." size="lg" />;
  }
  return (
    <main className="min-h-screen bg-drakGray">
      <section className="bg-sub mt-16 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SERVICES</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive pipeline inspection and maintenance solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-drakGray border border-gray-600 rounded-lg shadow-lg p-8"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-main mb-4">{service.title}</h3>
                <p className="text-white mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                  <Link href='/sign-in' className="mt-8">
                    <button className="bg-gray90 mt-8 hover:bg-main text-white px-8 flex gap-x-2 items-center py-3 rounded-lg text-lg font-semibold 
                     transition-colors">More<MdKeyboardDoubleArrowRight className="text-2xl items-center"/></button>
                  </Link>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-black"><span className="text-main">R</span>eady to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our pipeline inspection services can help maintain 
              and protect your infrastructure.
            </p>
            <Link href="/about/#contact" scroll={false}>
              <button className="bg-gray90 hover:bg-main text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}