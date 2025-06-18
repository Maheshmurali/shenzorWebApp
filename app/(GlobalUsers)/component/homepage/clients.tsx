import Image from "next/image"
import nwc from '@/assets/nwc.png'
import nabatat from '@/assets/n.png'
import amana from '@/assets/amana.png'
import modon from '@/assets/modon.png'
import alajmi from '@/assets/alajmi.png'
import ywp from '@/assets/ywp.png'
import shalfa from '@/assets/shalfa.png'
import cwc from '@/assets/cwc.png'
export default function ClientList(){
return(
    <div className=" bg-drakGray mt-4 rounded-md py-8">
        <div className="text-black  text-3xl py-4 w-full text-center">
         <h2 className="text-white"><span className="text-main text-4xl">O</span>ur Major Clients</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 space-y-8 items-center py-8">
                <div className="flex justify-center">
                    <a href="https://www.nwc.com.sa/English/pages/default.aspx" target="_blank" rel="noopener noreferrer">
                         <Image src={nwc} alt="National Water Company" width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.nabatat.com.sa/" target="_blank" rel="noopener noreferrer">
                         <Image src={nabatat} alt="nabatat"  width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                    </a>
                </div>
                    <div className="flex justify-center">
                        <a href="https://www.eamana.gov.sa/" target="_blank" rel="noopener noreferrer">
                            <Image src={amana} alt="eastern amana" width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                        </a>
                    </div>
                <div className="flex justify-center">
                    <a href="https://modon.gov.sa/en/Pages/default.aspx" target="_blank" rel="noopener noreferrer">
                        <Image src={modon} alt="modon" width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="https://alajmicompany.com/" target="_blank" rel="noopener noreferrer">
                        <Image src={alajmi} alt="alajmi" width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                    </a>
                </div>
                 <div className="flex justify-center">
                    <a href="https://yc.com.sa/en" target="_blank" rel="noopener noreferrer">
                        <Image src={ywp} alt="alajmi" width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                    </a>
                </div>
                 <div className="flex justify-center">
                    <a href="https://shalfa.sa/" target="_blank" rel="noopener noreferrer">
                        <Image src={shalfa} alt="alajmi" width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                    </a>
                </div>
                 <div className="flex justify-center">
                    <a href="https://www.cwc.com.sa/" target="_blank" rel="noopener noreferrer">
                        <Image src={cwc} alt="alajmi" width={150} height={150} className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
)
}