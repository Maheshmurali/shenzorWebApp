import Charts from "@/app/(admin)/Components/Charts";
import FormModal from "@/app/(admin)/Components/FormModal";
import ProductsCard from "@/app/(admin)/Components/ProductsCard";
import Image from "next/image";

export default function PartnerPfofilePage() {
  return (
    <div className="">
      <div className="flex justify-between px-12 py-6"> 
           <span className="flex items-center gap-2 ">
            <FormModal table="product" type="create" />Add Poducts
          </span>
          <span className="flex items-center gap-2">
             <FormModal table="service" type="create" /> Add Service
          </span>
       </div>
       <div className="w-full border border-1 border-gray-400"></div>
       <div className="lg:flex mx-12 mt-4 ">
          <div id="right" className="w-full xl:w-2/3 space-y-4 lg:flex px-8 xl-px-0 justify-between p-4 ring-1 bg-slate-300 rounded-md">
            <div className="flex justify-center align-middle items-center">
              <Image src='/user.png' alt="partner logo" width={146} height={116}/>
            </div>
            <div className="lg:w-2/3 space-y-4">
               <div className="flex  items-center justify-center gap-8">
                  <h2 className="text-xl font-semibold">Partner Name</h2>
                  <Image src='/update.png' alt="partner edit" width={16} height={14} />
                </div>
                <div className="flex justify-between items-center">
              <p>Email</p>
              <p>Phone</p>
              <p>Location</p>
            </div>
            <div className="text-center">
              <p>Contact Person</p>
            </div>
            <div>
              Company Details
            </div>
            </div>
           
          </div>
          <div id="left" className="w-full mt-4  xl:w-1/3">
          <h2 className="text-center">Bundles</h2>
            <Charts />
            <div className="flex  justify-evenly">
              <span>Product</span>
               <span>Service</span>
            </div>
            
          </div>
          <ProductsCard />
       </div>
    </div>

  )
}
