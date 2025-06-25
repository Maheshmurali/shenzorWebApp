'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
const slides = [
  {
    image: "/carousel/image4.jpg",
    title: "Sewer Inspection Systems",
    description: "FROM DN100 TO DN2000"
  },
  {
    image: "/carousel/image1.jpg",
    title: "Inspect More With",
    description: "iPEK Inspection System"
  },
  {
    image: "/carousel/image3.jpg",
    title: "iPEK'S",
    description: " Range Of Full HD Cameras"
  },
  {
    image: "/carousel/image2.jpg",
    title: "Sewer cleaning with our DYNA",
    description: "Advanced Solution For Pipeline Cleaning Systems"
  },
  {
    image: "/carousel/image6.png",
    title: "Sewer cleaning and hydro excavation",
    description: "enz® Camera & Standard Nozzles"
  },
  {
    image: "/carousel/image8.jpg",
    title: "IMS UV curing systems",
    description: "UV Curing for medium and large main sewer's"
  },

];


function HeaderSlide() {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
          const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
          }, 7000);
      
          return () => {
            clearInterval(timer);
          };
        }, []);
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className=" bg-gray-50">
        <div className="relative h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center text-white p-4">
              <div className={`transform transition-all duration-1000 text-center ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl lg:text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-1 md:p-2 rounded-full hover:bg-opacity-50 transition-all"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-1 md:p-2 rounded-full hover:bg-opacity-50 transition-all"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>
      </div>    
      </div>
    );
  }
  
  export default HeaderSlide;