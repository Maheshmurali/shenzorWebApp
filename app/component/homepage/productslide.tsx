'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card } from "@/components/ui/card";
  import Image from "next/image";
import { useEffect,useState } from "react";
export default function ProductsSlides(){
    const portfolioImages = [
      "/images/slide1.jpg",
      "/images/slide2.jpg",
      "/images/slide3.jpg",
      "/images/slide4.jpg",
      "/images/slide5.jpg",
  ];
      const [currentSlide, setCurrentSlide] = useState(0);
      const [isLoaded, setIsLoaded] = useState(false);
      useEffect(() => {
        setIsLoaded(true);
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
      }, []);
    return(
        <section className={`py-20 bg-muted ${isLoaded ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12"><span className="text-main">O</span>ur Portfolio</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioImages.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 text-main">
                  <div className={`p-1 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${400 + index * 100}ms` }}>
                    <Card className="overflow-hidden">
                      <Image
                        src={img}
                        alt={`Portfolio ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    )
}