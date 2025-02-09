'use client'
import { useState,useEffect } from "react";
interface CounterCardProps {
    counts: number;
    value: string;
  }
export default function CounterCard({counts, value}:CounterCardProps){
  
const [count, setCount] = useState(0);
useEffect(() => {
  let speed = 50
  const updateCount = () => {
    setCount((prev) => {
      if (prev >= counts) return counts; 

      
      speed = Math.max(5 + Math.floor(prev / 10), 50);
      return prev + 10;
    });
  };

  const interval = setInterval(updateCount, speed);

  return () => clearInterval(interval);
}, []);
    return(
            <div className="text-center gap-8 border-2  shadow-xl rounded-md hover:shadow-lg py-8 space-y-4">
                <p className="text-2xl font-bold duration-200">{count}+</p>
                <p >{value}</p>
            </div>
            
    )
}