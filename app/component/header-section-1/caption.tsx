import Image from "next/image"
import Robo from '@/public/header-section.png'

export default function Captions(){
    return(
        <div id="main" className="container gap-8 mt-32 md:mt-60 w-full space-x-8 flex-row md:flex text-center items-center align-middle ">
        <div className="w-64 h-64 bg-blue-800 rounded-full  blur-3xl -z-10 opacity-10 absolute top-1/2 
        left-1/2 transform -translate-x-1/2 
        -translate-y-1/2">

        </div>
             <div className="w-64 h-64 bg-blue-800 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 md:bottom-8 bottom-36">
            </div>
            <div id="captions" className="lg:w-1/2 gap-8 ">
                <div className="gap-4 ">
                <p className="text-xl md:w-autolg:text-3xl text-slate-700 p-2">
                    <span className="text-red-800 text-3xl">Ensuring</span> Safety  Reliability and Efficiency with<br /> 
                    <span className="text-red-800 text-3xl">S</span>henzor Cutting-edge Inspection Technology <br />
                    <span className="text-lg">Join With KSA Leading CCTV Inspection Technology</span>
                </p>
                </div>
                <div className="flex justify-center items-center align-middle w-full gap-12 mt-8">
                    <button className="boreder px-2 border-2 duration-300 hover:bg-yellow-300 hover:text-black cursor-pointer
                      rounded-md p-2">Meet Us</button>
                    <button className="boreder border-1 bg-yellow-300 rounded-md p-2 cursor-pointer duration-300
                     text-black hover:bg-yellow-500">Watch Demo</button>
                </div>
            </div>
            <div id="images" className="mt-8">
                <div className="relative">
                    <div className="bg-slate-600 rounded-full"></div>
                    <div>
                        <Image  src={Robo} alt="caption Image" width={500} className="w-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}