import Image from "next/image"
import nwc from '@/assets/nwc.png'
import nabatat from '@/assets/n.png'
import amana from '@/assets/e.png'
import modon from '@/assets/modon.png'
import alajmi from '@/assets/alajmi.png'
export default function ClientList(){
return(
    <div className=" bg-white mt-4 rounded-md py-8">
        <div className="text-black  text-3xl py-4 w-full text-center">
         <h2><span className="text-primary text-4xl">O</span>ur Major Clients</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 space-y-8 items-center py-8">
                <div className="flex justify-center">
                     <Image src={nwc} alt="National Water Company" width={200} height={200} className="grayscale hover:grayscale-0 transition duration-300"/>
                </div>
                <div className="flex justify-center">
                     <Image src={nabatat} alt="nabatat"  width={200} height={200} className="grayscale hover:grayscale-0 transition duration-300"/>
                </div>
                    <div className="flex justify-center">
                        <Image src={amana} alt="eastern amana" width={200} height={200} className="grayscale hover:grayscale-0 transition duration-300"/>
                    </div>
                <div className="flex justify-center">
                     <Image src={modon} alt="modon" width={200} height={200} className="grayscale hover:grayscale-0 transition duration-300"/>
                </div>
                <div className="flex justify-center">
                    <Image src={alajmi} alt="alajmi" width={200} height={200} className="grayscale hover:grayscale-0 transition duration-300"/>
                </div>
            </div>
        </div>
    </div>
)
}