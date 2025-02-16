'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import rovin from '@/assets/Rovin.png'
import agilios from '@/assets/agilios.png'
import wincan from '@/assets/wincan.jpg'
import { Video, Database, FileText } from "lucide-react";
import { TbView360Number } from "react-icons/tb";

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
                icon2: TbView360Number,
                link: "/products/cctv-inspection",
                width: 500,
                height :300,
                spec : "Full HD Resolution",
                spec2: "360 degree wide Range"
            },
            agilios: {
                key: 2,
                title: "Agilios",
                description: "A system built to achieve 'Inspections in all situations' and even the remote locations",
                image: agilios,
                icon: Video,
                icon2: TbView360Number,
                link: "/products/cctv-inspection",
                width: 300,
                height : 200,
                spec: "Full Hd Resolution",
                spec2: "360 degree wide Range"
            },
            wincan: {
                key: 3,
                title: "WinCan",
                description: "The first sewer inspection software and the most trusted brand in the market",
                image: wincan,
                icon: Database,
                icon2: FileText,
                link: "/products/cctv-inspection",
                width: 500,
                height :300,
                spec: "Easy to use",
                spec2 : "Quick Report Generation"
            },
        }
    ];

    function Selection(event) {
        setPost(event.target.value);
    }

    return (
        <>
            <div id="main" className="w-full max-h-auto py-8 mt-4">
                <div id="title" className="w-full text-center">
                    <h2 className="text-white text-3xl font-bold text-center mb-12"><span className="text-main">S</span>henzor's
                     <span className="text-main"> R</span>oVs</h2>
                </div>
                <div className="container flex gap-24 justify-center my-4 text-xl">
                    <button className={`hover:text-main ${(post==="rovin")? 'text-main':'text-white' }`} value="rovin" onClick={Selection}>iPEK Rovion</button>
                    <button className={`hover:text-main ${(post==="agilios")? 'text-main':'text-white' }`} value="agilios" onClick={Selection}>iPEK Agilios</button>
                    <button className={`hover:text-main ${(post==="wincan")? 'text-main':'text-white' }`} value="wincan" onClick={Selection}>WinCan</button>
                </div>

                <div id="products" className="w-full px-8 flex justify-center mt-12">
                    {data.map((value) => {
                        const product = value[post];
                        return product ? (
                            <div id="product-1" key={product.key} className="w-full flex space-x-4">
                                <div id="image" className="w-1/2 ">
                                    <Image src={product.image} alt={product.title} width={product.width} height={product.height} />
                                    <div className="flex mt-8 container space-x-4">
                                        <product.icon className="text-4xl" /> 
                                        <p>{product.spec}</p>
                                        <product.icon2 className="text-4xl" /> 
                                        <p>{product.spec2}</p>
                                     </div>
                                </div>
                                 <div id="description" className="mt-4">
                                    <p>{product.description}</p>
                                     <div className="flex mt-12  align-middle justify-center items-center">
                                         <Link className="bg-yellow-400 text-black hover:bg-yellow-200 p-2
                                         rounded-md  px-4" href={product.link} >Explore</Link>
                                     </div>
                                </div>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
        </>
    );
}
