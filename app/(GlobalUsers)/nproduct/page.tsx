'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  price: number;
  image: string;
  partnerId: string;
  partnerName: string;
  category?: string;
  inStock?: boolean;
  rating?: number;
}

// Dummy Data
const partners: Partner[] = [
  {
    id: 'tech-solutions',
    name: 'Tech Solutions',
    description: 'Leading technology solutions provider'
  },
  {
    id: 'eco-products',
    name: 'Eco Products',
    description: 'Sustainable and eco-friendly products'
  },
  {
    id: 'luxury-brands',
    name: 'Luxury Brands',
    description: 'Premium luxury lifestyle products'
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    description: 'Health and wellness solutions'
  },
  {
    id: 'home-living',
    name: 'Home & Living',
    description: 'Modern home and living essentials'
  }
];

const products: Product[] = [
  // Tech Solutions Products
  {
    id: 'ts-001',
    name: 'Wireless Earbuds Pro',
    description: 'Premium wireless earbuds with noise cancellation and 24-hour battery life.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'tech-solutions',
    partnerName: 'Tech Solutions',
    category: 'Electronics',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'ts-002',
    name: 'Smart Watch Series X',
    description: 'Advanced fitness tracking with health monitoring and GPS navigation.',
    price: 349.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'tech-solutions',
    partnerName: 'Tech Solutions',
    category: 'Wearables',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'ts-003',
    name: 'Ultra HD Webcam',
    description: '4K webcam with auto-focus and noise-reducing microphone for professional streaming.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'tech-solutions',
    partnerName: 'Tech Solutions',
    category: 'Electronics',
    inStock: false,
    rating: 4.6
  },
  
  // Eco Products
  {
    id: 'ep-001',
    name: 'Bamboo Phone Case',
    description: 'Sustainable bamboo phone case with wireless charging compatibility.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'eco-products',
    partnerName: 'Eco Products',
    category: 'Accessories',
    inStock: true,
    rating: 4.4
  },
  {
    id: 'ep-002',
    name: 'Solar Power Bank',
    description: 'Eco-friendly solar-powered portable charger with 20,000mAh capacity.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'eco-products',
    partnerName: 'Eco Products',
    category: 'Power',
    inStock: true,
    rating: 4.7
  },
  {
    id: 'ep-003',
    name: 'Reusable Water Bottle',
    description: 'Insulated stainless steel water bottle with temperature retention technology.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1342479/pexels-photo-1342479.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'eco-products',
    partnerName: 'Eco Products',
    category: 'Lifestyle',
    inStock: true,
    rating: 4.5
  },
  
  // Luxury Brands
  {
    id: 'lb-001',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted Italian leather wallet with RFID protection and gold accents.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'luxury-brands',
    partnerName: 'Luxury Brands',
    category: 'Accessories',
    inStock: true,
    rating: 4.9
  },
  {
    id: 'lb-002',
    name: 'Designer Sunglasses',
    description: 'Limited edition designer sunglasses with polarized lenses and titanium frame.',
    price: 599.99,
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'luxury-brands',
    partnerName: 'Luxury Brands',
    category: 'Fashion',
    inStock: true,
    rating: 5.0
  },
  
  // Health & Wellness
  {
    id: 'hw-001',
    name: 'Yoga Mat Premium',
    description: 'Non-slip premium yoga mat with alignment guides and carrying strap.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'health-wellness',
    partnerName: 'Health & Wellness',
    category: 'Fitness',
    inStock: true,
    rating: 4.6
  },
  {
    id: 'hw-002',
    name: 'Meditation Cushion',
    description: 'Organic cotton meditation cushion with buckwheat hull filling for comfort.',
    price: 59.99,
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'health-wellness',
    partnerName: 'Health & Wellness',
    category: 'Wellness',
    inStock: true,
    rating: 4.8
  },
  {
    id: 'hw-003',
    name: 'Essential Oil Diffuser',
    description: 'Ultrasonic aromatherapy diffuser with LED lighting and timer settings.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'health-wellness',
    partnerName: 'Health & Wellness',
    category: 'Wellness',
    inStock: false,
    rating: 4.3
  },
  
  // Home & Living
  {
    id: 'hl-001',
    name: 'Modern Table Lamp',
    description: 'Minimalist LED table lamp with touch controls and wireless charging base.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'home-living',
    partnerName: 'Home & Living',
    category: 'Lighting',
    inStock: true,
    rating: 4.7
  },
  {
    id: 'hl-002',
    name: 'Ceramic Plant Pot Set',
    description: 'Set of 3 handmade ceramic plant pots with drainage and saucers.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'home-living',
    partnerName: 'Home & Living',
    category: 'Decor',
    inStock: true,
    rating: 4.4
  },
  {
    id: 'hl-003',
    name: 'Smart Home Hub',
    description: 'Voice-controlled smart home hub with compatibility for 500+ devices.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&w=500',
    partnerId: 'home-living',
    partnerName: 'Home & Living',
    category: 'Technology',
    inStock: true,
    rating: 4.9
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
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* Product Info */}
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

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-4 h-4",
                    i < Math.floor(product.rating!)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
          </div>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ${product.price}
          </div>
          <Button
            size="sm"
            className={cn(
              "bg-orange-500 hover:bg-orange-600 text-white transition-colors",
              !product.inStock && "opacity-50 cursor-not-allowed"
            )}
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </Button>
        </div>
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