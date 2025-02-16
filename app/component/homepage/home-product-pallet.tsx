'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import rovin from '@/assets/Rovin.png'
import agilios from '@/assets/agilios.png'
import wincan from '@/assets/wincan.jpg'
import { Video, Database } from "lucide-react";

export default function HomeProductPallet() {
    const [post, setPost] = useState('rovin');

    const data = [
        {
            id: 1,
            rovin: {
                key: 1,
                title: "Rovin",
                description: "A scalable sewer inspection system for pipe diameters from DN100 to DN2000",
                image: rovin,
                icon: Video,
                link: "/products/cctv-inspection"
            },
            agilios: {
                key: 2,
                title: "Agilios",
                description: "A system built to achieve 'Inspections in all situations' and even the remote locations",
                image: agilios,
                icon: Video,
                link: "/products/cctv-inspection"
            },
            wincan: {
                key: 3,
                title: "WinCan",
                description: "The first sewer inspection software and the most trusted brand in the market",
                image: wincan,
                icon: Database,
                link: "/products/cctv-inspection"
            },
        }
    ];

    function Selection(event) {
        setPost(event.target.value);
    }

    return (
        <>
            <div id="main" className="w-full max-h-auto">
                <div id="title" className="w-full text-center">
                    <h3>Explore Shenzor's RoVs</h3>
                </div>
                <div className="flex gap-4 justify-center my-4">
                    <button value="rovin" onClick={Selection}>iPEK Rovion</button>
                    <button value="agilios" onClick={Selection}>iPEK Agilios</button>
                    <button value="wincan" onClick={Selection}>WinCan</button>
                </div>

                <div id="products" className="flex justify-center">
                    {data.map((value) => {
                        const product = value[post];
                        return product ? (
                            <div id="product-1" key={product.key} className="text-center p-4 border rounded-lg shadow-lg w-96">
                                <div id="image">
                                    <Image src={product.image} alt={product.title} width={200} height={200} />
                                </div>
                                <div className="mt-2">
                                    <product.icon className="w-8 h-8 mx-auto text-gray-700" /> 
                                </div>
                                <div id="description" className="mt-4">
                                    <p>{product.description}</p>
                                </div>
                                <Link href={product.link} className="text-blue-500 block mt-2">Explore</Link>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
        </>
    );
}
