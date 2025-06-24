'use client';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import iPEK from "@/assets/products/iPEK/Ipek.webp"
import crawler from "@/assets/products/iPEK/mainline crawler.png"
import lateral from "@/assets/products/iPEK/lateral.png"
import pushcam from "@/assets/products/iPEK/pushcam.png"
import zoomcamera from "@/assets/products/iPEK/zoomcamera.png"
import manholecamera from "@/assets/products/iPEK/manholecamera.png"
import videonozzle from "@/assets/products/iPEK/videonozzles.png"
import wincan from "@/assets/products/wincan/wincan.png"
import enz from "@/assets/products/enz/EnzCam.png"
import bulldog37hd from "@/assets/products/enz/Bulldog-37HD.png"
import bulldog60hd from "@/assets/products/enz/Bulldog-60HD-130HD.png"
import rgs from "@/assets/products/enz/rgs-hrh-kbr-kbrv.png"
import ub360 from "@/assets/products/enz/Rohre-ueber-30-mm.png"
import dietmarkaiser from "@/assets/products/dietmarkaiser/DYNA Combi.jpg"
import dynacombi from "@/assets/products/dietmarkaiser/dyna-combi.jpg"
import envirobot from "@/assets/products/envirobot/viper.png"
import viperlong from "@/assets/products/envirobot/viper-long.png"
import vipercomapct from "@/assets/products/envirobot/viper-compact.jpg"
import viperlight from "@/assets/products/envirobot/viper-light.jpg"
import bewll from "@/assets/products/bwelltechnology/bwell.webp"
import phoenix180 from "@/assets/products/bwelltechnology/phonix-180c.png"
import phoenix100 from "@/assets/products/bwelltechnology/phoenix.png"
import snake from "@/assets/products/bwelltechnology/snake1000-1.png"
import ims from "@/assets/products/ims/ims Robotics.png"
// Types

interface Partner {
  id: string;
  name: string;
  description?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  partnerId: string;
  partnerName: string;
  category?: string;
  inStock?: boolean;
}

// Dummy Data
const partners: Partner[] = [
  {
    id: 'ipek',
    name: 'iPEK',
    description: 'Leading technology solutions provider'
  },
  {
    id: 'wincan',
    name: 'WinCan',
    description: 'Industry-leading sewer inspection software trusted by professionals worldwide with comprehensive data management and reporting capabilities'
  },
  {
    id: 'enz-technik',
    name: 'enz® technik',
    description: 'Premium luxury lifestyle products'
  },
  {
    id: 'dietmarkaiser',
    name: 'DietmarKaiser',
    description: 'Proven combination of pumps, components and assemblies from our own production making the DYNA Combi unique in the industry.'
  },
  {
    id: 'ims-robotics',
    name: 'IMS Robitics',
    description: 'Modern home and living essentials'
  },
   {
    id: 'envirobot',
    name: 'Envirobot',
    description: 'Modern home and living essentials'
  },
   {
    id: 'bwell-technology',
    name: 'Bwell Technology',
    description: 'Modern home and living essentials'
  }
];

const products: Product[] = [
  // Tech Solutions Products
  {
    id: 'p-001',
    name: 'Mainline Inspection Crawlers',
    description: 'High-definition camera inspection for detailed pipe assessment.',
    image: iPEK,
    partnerId: 'ipek',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
  {
    id: 'p-002',
    name: 'Lateral Launch Crawlers',
    description: 'ROVION SAT II assesses laterals directly from a mainline with unrivaled speed, range, articulation and pushing force.',
    image: lateral,
    partnerId: 'ipek',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
  {
    id: 'ts-003',
    name: 'Push Cam',
    description: 'The AGILIOS system inspects laterals and clean-outs, offering touchscreen recording, defect logging, and up to 90° bend mobility for its pan & tilt camera',
    image: pushcam,
    partnerId: 'ipek',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: false,
  },
    {
    id: 'ts-004',
    name: 'Zoom Camera',
    description: 'The wireless, tablet-controlled Quickview airHD rapidly assesses mainlines from the nearest manhole to determine where CCTV, cleaning or rehab is needed',
    image: zoomcamera,
    partnerId: 'ipek',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: false,
  },
  
  // Eco Products
  {
    id: 'ep-001',
    name: 'Bamboo Phone Case',
    description: 'Sustainable bamboo phone case with wireless charging compatibility.',
    image: videonozzle,
    partnerId: 'eco-products',
    partnerName: 'Eco Products',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: 'ep-002',
    name: 'Solar Power Bank',
    description: 'Eco-friendly solar-powered portable charger with 20,000mAh capacity.',
    image: vipercomapct,
    partnerId: 'eco-products',
    partnerName: 'Eco Products',
    category: 'Power',
    inStock: true,
  },
  {
    id: 'ep-003',
    name: 'Reusable Water Bottle',
    description: 'Insulated stainless steel water bottle with temperature retention technology.',
    image: enz,
    partnerId: 'eco-products',
    partnerName: 'Eco Products',
    category: 'Lifestyle',
    inStock: true,

  },
  
  // Luxury Brands
  {
    id: 'lb-001',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted Italian leather wallet with RFID protection and gold accents.',
    image: vipercomapct,
    partnerId: 'luxury-brands',
    partnerName: 'Luxury Brands',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: 'lb-002',
    name: 'Designer Sunglasses',
    description: 'Limited edition designer sunglasses with polarized lenses and titanium frame.',
    image: vipercomapct,
    partnerId: 'luxury-brands',
    partnerName: 'Luxury Brands',
    category: 'Fashion',
    inStock: true,
  },
  
  // Health & Wellness
  {
    id: 'hw-001',
    name: 'Yoga Mat Premium',
    description: 'Non-slip premium yoga mat with alignment guides and carrying strap.',
    image: enz,
    partnerId: 'health-wellness',
    partnerName: 'Health & Wellness',
    category: 'Fitness',
    inStock: true,
  },
  {
    id: 'hw-002',
    name: 'Meditation Cushion',
    description: 'Organic cotton meditation cushion with buckwheat hull filling for comfort.',
    image: snake,
    partnerId: 'health-wellness',
    partnerName: 'Health & Wellness',
    category: 'Wellness',
    inStock: true,
  },
  {
    id: 'hw-003',
    name: 'Essential Oil Diffuser',
    description: 'Ultrasonic aromatherapy diffuser with LED lighting and timer settings.',
    image: snake,
    partnerId: 'health-wellness',
    partnerName: 'Health & Wellness',
    category: 'Wellness',
    inStock: false,
  },
  
  // Home & Living
  {
    id: 'hl-001',
    name: 'Modern Table Lamp',
    description: 'Minimalist LED table lamp with touch controls and wireless charging base.',
    image: snake,
    partnerId: 'home-living',
    partnerName: 'Home & Living',
    category: 'Lighting',
    inStock: true,
  },
  {
    id: 'hl-002',
    name: 'Ceramic Plant Pot Set',
    description: 'Set of 3 handmade ceramic plant pots with drainage and saucers.',
    image: dietmarkaiser,
    partnerId: 'home-living',
    partnerName: 'Home & Living',
    category: 'Decor',
    inStock: true,
  },
  {
    id: 'hl-003',
    name: 'Smart Home Hub',
    description: 'Voice-controlled smart home hub with compatibility for 500+ devices.',
    image: dynacombi,
    partnerId: 'home-living',
    partnerName: 'Home & Living',
    category: 'Technology',
    inStock: true,
  }
];

// Components
function PartnerFilter({ partners, activePartnerId, onPartnerSelect }: {
  partners: Partner[];
  activePartnerId: string | null;
  onPartnerSelect: (partnerId: string | null) => void;
}) {
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto py-4">
          {/* All Partners Tab */}
          <button
            onClick={() => onPartnerSelect(null)}
            className={cn(
              "flex-shrink-0 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 border",
              activePartnerId === null
                ? "bg-orange-500 text-white border-orange-500 shadow-md"
                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
            )}
          >
            All
          </button>
          
          {/* Individual Partner Tabs */}
          {partners.map((partner) => (
            <button
              key={partner.id}
              onClick={() => onPartnerSelect(partner.id)}
              className={cn(
                "flex-shrink-0 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 border whitespace-nowrap",
                activePartnerId === partner.id
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
              )}
            >
              {partner.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {product.partnerName}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}

function ProductGrid({ products, activePartner }: {
  products: Product[];
  activePartner: string | null;
}) {
  const filteredProducts = activePartner
    ? products.filter(product => product.partnerId === activePartner)
    : products;

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-6xl mb-4">📦</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-600">
          {activePartner 
            ? "This partner doesn't have any products available yet." 
            : "No products available at the moment."
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// Main Component
export default function ProductsPage() {
  const [activePartnerId, setActivePartnerId] = useState<string | null>(null);

  const activePartner = activePartnerId 
    ? partners.find(p => p.id === activePartnerId) 
    : null;

  const filteredProducts = activePartnerId
    ? products.filter(product => product.partnerId === activePartnerId)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing products from our trusted partners. Browse by partner or explore our entire collection.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Filter */}
      <PartnerFilter
        partners={partners}
        activePartnerId={activePartnerId}
        onPartnerSelect={setActivePartnerId}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {activePartner ? `${activePartner.name} Products` : 'All Products'}
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                {activePartner && (
                  <span className="ml-2 text-sm">
                    • {activePartner.description}
                  </span>
                )}
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="text-sm text-gray-600">
                <span className="font-medium">{partners.length}</span> Partners
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{products.length}</span> Total Products
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} activePartner={activePartnerId} />
      </div>
    </div>
  );
}