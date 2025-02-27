'use client'
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star} from "lucide-react";
import User from '@/public/user.png'
export default function CustomersReviews(){
  const [isLoaded, setIsLoaded] = useState(true);
  const reviews = [
    {
      name: "Customer-1",
      rating: 5,
      comment: "Exceptional service! The team went above and beyond.",
      avatar: "/user.png",
    },
    {
      name: "Customer-2",
      rating: 5,
      comment: "Outstanding quality and professional approach.",
      avatar: "/user.png",
    },
    {
      name: "Customer-3",
      rating: 4,
      comment: "Very satisfied with the results. Would recommend!",
      avatar: '/user.png',
    },
  ];
  return(
    <section className={`py-20 bg-slate-100 mt-4 ${isLoaded ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-black text-3xl font-bold text-center mb-12"><span className="text-main">C</span>ustomers Reviews</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Card key={index} className={`p-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${600 + index * 100}ms` }}>
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={review.avatar} />
                <AvatarFallback>{review.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>

  )
}