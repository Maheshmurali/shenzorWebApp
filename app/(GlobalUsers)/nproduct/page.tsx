'use client';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import crawler from "@/assets/products/iPEK/mainline crawler.png"
import lateral from "@/assets/products/iPEK/lateral.png"
import pushcam from "@/assets/products/iPEK/pushcam.png"
import zoomcamera from "@/assets/products/iPEK/zoomcamera.png"
import manholecamera from "@/assets/products/iPEK/manholecamera.png"
import videonozzle from "@/assets/products/iPEK/videonozzles.png"
import wincan from "@/assets/products/wincan/wincan.png"
import bulldog37hd from "@/assets/products/enz/Bulldog-37HD.png"
import bulldog60hd from "@/assets/products/enz/Bulldog-60HD-130HD.png"
import rgs from "@/assets/products/enz/rgs-hrh-kbr-kbrv.png"
import ub360 from "@/assets/products/enz/Rohre-ueber-30-mm.png"
import dynacombi from "@/assets/products/dietmarkaiser/dyna-combi.jpg"
import viperlong from "@/assets/products/envirobot/viper-long.png"
import vipercomapct from "@/assets/products/envirobot/viper-compact.jpg"
import viperlight from "@/assets/products/envirobot/viper-light.jpg"
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
    id: 'iPEK',
    name: 'iPEK',
    description: ''
  },
  {
    id: 'wincan',
    name: 'WinCan',
    description: ''
  },
  {
    id: 'enz',
    name: 'enz® technik',
    description: ''
  },
  {
    id: 'dietmarkaiser',
    name: 'DietmarKaiser',
    description: ''
  },
  {
    id: 'ims',
    name: 'IMS Robitics',
    description: ''
  },
   {
    id: 'envirobot',
    name: 'Envirobot',
    description: ''
  },
   {
    id: 'bwelltechnology',
    name: 'Bwell Technology',
    description: ''
  }
];

const products: Product[] = [

  {
    id: 'p-001',
    name: 'Mainline Inspection Crawlers',
    description: 'High-definition camera inspection for detailed pipe assessment.',
    image: crawler,
    partnerId: 'iPEK',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
     {
    id: 'hl-004',
    name: 'VIPER® Light',
    description: 'Ultra HD Camera System',
    image: viperlight,
    partnerId: 'envirobot',
    partnerName: 'Envirobot',
    category: 'Viper',
    inStock: true,
  },

  {
    id: 'ts-003',
    name: 'Push Cam',
    description: 'The AGILIOS system inspects laterals and clean-outs, offering touchscreen recording, defect logging, and up to 90° bend mobility for its pan & tilt camera',
    image: pushcam,
    partnerId: 'iPEK',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
 {
    id: 'hl-007',
    name: 'Pressurized Water Leak Detection and Inspection',
    description: 'Snake is a modular-designed device for the inspection of pressure pipelines.',
    image: snake,
    partnerId: 'bwelltechnology',
    partnerName: 'Bwell Technology',
    category: 'Rehabilitation',
    inStock: true,
  },
  {
    id: 'ep-002',
    name: 'Manhole Camera',
    description: 'With Quickview 360, a single operator can scan up to 80 manholes per day.',
    image: manholecamera,
    partnerId: 'iPEK',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
  {
    id: 'ep-003',
    name: 'WinCan VX',
    description: 'Complete inspection software solution with advanced analytics and reporting features.',
    image: wincan,
    partnerId: 'wincan',
    partnerName: 'WinCan',
    category: 'Inspection SoftWare',
    inStock: true,

  },
  {
    id: 'lb-001',
    name: 'Bulldog 37HD',
    description: 'enz® Bulldog 37HD rotary nozzle is designed for High Performance internal pipe cleaning up to 1000 bar.',
    image: bulldog37hd,
    partnerId: 'enz',
    partnerName: 'enz®',
    category: 'WaterJet Nozzles',
    inStock: true,
  },
    {
    id: 'p-002',
    name: 'Lateral Launch Crawlers',
    description: 'ROVION SAT II assesses laterals directly from a mainline with unrivaled speed, range, articulation and pushing force.',
    image: lateral,
    partnerId: 'iPEK',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
 
  {
    id: 'hw-001',
    name: 'RGS, HRH, KBR, KBRV',
    description: 'Cleaning of heat exchangers in chemical and nuclear plants',
    image: rgs,
    partnerId: 'enz',
    partnerName: 'enz®',
    category: 'WaterJet Nozzles',
    inStock: true,
  },
  {
    id: 'ep-001',
    name: 'Video Nozzle',
    description: 'Plan cleaning, assess line condition and verify results with the wireless Xpection Lite video nozzle.',
    image: videonozzle,
    partnerId: 'iPEK',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
  {
    id: 'hw-002',
    name: 'UB 360',
    description: 'Best performance for Large Pipes.',
    image: ub360,
    partnerId: 'enz',
    partnerName: 'enz®',
    category: 'WaterJet Nozzles',
    inStock: true,
  },
  {
    id: 'hw-003',
    name: 'DYNA Combi',
    description: 'The proven combination of pumps, components and assemblies from our own production make the DYNA Combi unique.',
    image: dynacombi,
    partnerId: 'dietmarkaiser',
    partnerName: 'Dietmarkaiser',
    category: 'High-Pressure Jetting Unit',
    inStock: true,
  },
  {
    id: 'hl-001',
    name: 'DRIVEpluse',
    description: 'The DRIVEplus CLEANER enables fast and reliable removal of deposits.',
    image: ims,
    partnerId: 'ims',
    partnerName: 'IMS ROBOTICS',
    category: 'Cleaning',
    inStock: true,
  },
  {
    id: 'hl-002',
    name: 'VIPER® Long range',
    description: 'Ultra HD Camera System.',
    image: viperlong,
    partnerId: 'envirobot',
    partnerName: 'Envirobot',
    category: 'Viper',
    inStock: true,
  },

   {
    id: 'hl-005',
    name: 'Phoenix-180C UV',
    description: 'Comprehensive pipeline rehabilitation system designed for various materials including concrete, steel, and cast iron pipes',
    image: phoenix180,
    partnerId: 'bwelltechnology',
    partnerName: 'Bwell Technology',
    category: 'Rehabilitation',
    inStock: true,
  },
  {
    id: 'lb-002',
    name: 'Bulldog 60HD-130HD',
    description: 'The enz® Bulldog 60HD and 130HD rotary nozzle are designed for high performance internal pipe cleaning up to 1000 bar.',
    image: bulldog60hd,
    partnerId: 'enz',
    partnerName: 'enz®',
    category: 'waterJet Nozzles',
    inStock: true,
  },
  {
    id: 'ts-004',
    name: 'Zoom Camera',
    description: 'The wireless, tablet-controlled Quickview airHD rapidly assesses mainlines from the nearest manhole to determine where CCTV, cleaning or rehab is needed',
    image: zoomcamera,
    partnerId: 'iPEK',
    partnerName: 'iPEK',
    category: 'Swer Inspection',
    inStock: true,
  },
     {
    id: 'hl-006',
    name: 'PHOENIX 100s ',
    description: 'PHOENIX 100s is an efficient UV curing system consisting of a main control unit, a light chain/light core.....',
    image: phoenix100,
    partnerId: 'bwelltechnology',
    partnerName: 'Bwell Technology',
    category: 'Rehabilitation',
    inStock: true,
  },
   {
    id: 'hl-003',
    name: 'VIPER® Comapct',
    description: 'Ultra HD Camera System',
    image: vipercomapct,
    partnerId: 'envirobot',
    partnerName: 'Envirobot',
    category: 'Viper',
    inStock: true,
    
  },

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
                ? "bg-main text-white border-main shadow-md"
                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-orange-50 hover:main hover:border-orange-200"
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
                  ? "bg-main text-white border-main shadow-md"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-orange-50 hover:text-main hover:border-orange-200"
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
    <Link href={`/products/${product.partnerId}/#${product.name}`} scroll={false}>
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
          <Badge variant="secondary" className="bg-white/90 text-black">
            {product.partnerName}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-main transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
    </Link>
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
    <div className="min-h-screen bg-drakGray mt-24">
      {/* Header */}
      <div className="bg-drakGray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-3xl text-gray-300 max-w-3xl mx-auto">
              Discover amazing products from our trusted partners. 
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
              <h2 className="text-2xl font-semibold text-white">
                {activePartner ? `${activePartner.name} Products` : 'All Products'}
              </h2>
              <p className="text-white mt-1">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                {activePartner && (
                  <span className="ml-2 text-sm">
                    • {activePartner.description}
                  </span>
                )}
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="text-sm text-white">
                <span className="font-medium">{partners.length}</span> Partners
              </div>
              <div className="text-sm text-white">
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