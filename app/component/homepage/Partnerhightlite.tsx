"use client";
import React, { useState, useEffect } from "react";
import { Star, Shield, Truck } from "lucide-react";
import Link from "next/link";
const products = [
  {
    name: "iPEK",
    title:"Rovin",
    image: "/partners/rovin.jpg",
    description:
      "ROVION is built with flexibility in mind. Fully scalable and with 100% compatible components, it’s tailored to fit your inspection needs, allowing for precise evaluations of pipe diameters ranging from DN100 to DN2000 .",
    specification:[
      {
      id:1,
      title : "Title",
      details: "details",
      value:"value"
    },
  ]
  },
  {
    name: "WinCan",
    title: "WinCanX",
    image: "/partners/wincanx.png",
    description:
      "WinCan was the first sewer inspection software ever developed and remains the most trusted brand in the market. Commitment to innovation has helped us revolutionize the way you gain insight from inspection data—insight that helps you plan maintenance, improve performance and achieve compliance",
    specification:[
      {
      id:2,
      title : "Title",
      details: "details",
      value:"value"
    },
 
  ]
  },
  {
    name: "Dyna",
    title: "Tank",
    image: "/partners/dynaTank.jpg",
    description:
      "The proven combination of pumps, components and assemblies from our own production make the DYNA Combi unique.This means that individual customer wishes and requirements can be optimally implemented.",
    specification: [
      {
        id:3,
        title: "Title",
        details: "details",
        value: "value"
      },
    ],
  },
  {
    name: "Enz",
    title :"eBomber",
    image: "/partners/enz.png",
    description:
      "The enz® Camera Nozzle adds a new dimension to the enz® nozzle product range! The modular design allows universal use with all nozzle types, such as the eBomb, the eBulldog or the eBulldozer, and thus guarantees streak-free, all-around cleaning in every application.",
    specification: [
      {
        id:3,
        title: "Title",
        details: "details",
        value: "value"
      },
    ],
  },
  {
    name: "iMS",
    title :"DRIVEpluse Cleaner",
    image: "/partners/ims.png",
    description:
      "The DRIVEplus CLEANER enables fast and reliable removal of deposits. conclnd other materials using ultra high pressure water up to 2,500 bar. The ultraater pressure adaptation is versatile and suitable for main sewers with diame1rom DN 200 to DN 600. The rotary swivel drive (DSA), which can be rotated.",
   specification: [
      {
        id:3,
        title: "Title",
        details: "details",
        value: "value"
      },
    ],
  },
];

function PartnerHighlites() {
  const [currentProduct, setCurrentProduct] = useState(0);
  useEffect(() => {
    const productTimer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 7000);

    return () => {
      clearInterval(productTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
            Our Featured Products
          </h2>
          <div className="flex justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            {products.map((product, index) => (
              <button
                key={index}
                className={`text-base md:text-lg font-semibold pb-2 border-b-2 transition-all ${
                  index === currentProduct
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setCurrentProduct(index)}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentProduct * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-full flex flex-shrink-0 flex-col">
                <div className="w-full flex-shrink-0 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[250px] md:h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-400">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6">
                      {product.description}
                    </p>
                   <Link href={`/products/${product.id}`} className="bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-blue-600 
                        transition-colors w-fit">
                      View Details
                    </Link>
                  </div>
                </div>
                {/* Features Section */}
                {product.specification.map((spec =>(
                  <div key={spec.id} className="flex w-full flex-wrap justify-between items-center px-4  mt-4 gap-6 md:gap-8 md:mt-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Star className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-main">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600">{spec.details}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Shield className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-main">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600">{spec.details}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Truck className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-main">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600">{spec.details}</p>
                  </div>
                </div>
                )))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerHighlites;
