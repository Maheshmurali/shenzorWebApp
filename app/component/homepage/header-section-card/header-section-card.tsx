import CounterCard from "./counter";

export default function HeaderCards(){
    return(
        <div className="bg-white w-full rounded-md text-black mt-8 py-8">
            <div className="container">
            <div className="w-full flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl text-slate-800">
                    <span className="text-primary">W</span>hy Choose US ?
                </h3>
            </div>
            <div className="text-center mt-4 text-slate-600">
                <p>
                The Leading Developer of Integrated CCTV Inspection Systems in KSA and The Region
                </p>
            </div>
            <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 
                mt-4 py-8 overflow-x-hidden">
                <CounterCard counts={400} value={"Projects"}/>
                <CounterCard counts={100} value={"Happy Coustmers"} />
                <CounterCard counts={20} value={"Range Of Solutions"} />
                </div>
            </div>
        </div>
    )
}