'use client'
import Image from "next/image";
import { useState } from "react";
//import Clientform from "./Forms/ClientForm";
import dynamic from "next/dynamic";
import PartnerForm from "./Forms/PartnerForm";
import ProductsForm from "./Forms/ProductForms";
import ServiceForm from "./Forms/ServiceForm";

//For loading animation
const Clientform = dynamic(()=> import("./Forms/ClientForm"),{
  loading:()=> <h1>Loading....</h1>
})
// for select tables 
const forms: {
  [key:string]:(type: "create" | "update", data?:any) => JSX.Element;
 } ={
    client : (type,data) => <Clientform type={type} data={data}/>,
    partner : (type,data) => <PartnerForm type={type} data={data} />,
    product : (type,data) => <ProductsForm type={type} data={data} />,
    service : (type,data) => <ServiceForm type={type} data={data} />
}

export default function FormModal( {
    table,
    type,
    data,
    id,
}:{
    table: 
    |"client"
    |"partner"
    |"order"
    |"product"
    |"service";
    type: "create" | "update" | "delete";
    data?: "any";
    id?:number | string;
} ) {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const[open, setOpen] = useState(false)

    const Form = () => {
      return (
        type === "delete" && id ? (
          <form action="" className="p-4 flex flex-col gap-4">
            <span className="text-center font-medium">
              All {table} data will be lost. Are you sure you want to delete this {table}?
            </span>
            <button className="bg-red-700 text-white px-4 py-2 rounded-md border-none w-max self-center">
              Delete
            </button>
          </form>
        ) : type === "create" || type === "update" ? (
          forms[table](type, data)
        ) : (
          "Form Not Found!"
        )
      );
    };
    

  return (
    <div className="">
      <button className={`${size} flex justify-center items-center`} 
        onClick={()=>setOpen(true)}>
        <Image src={`/${type}.png`} alt='' width={24} height={24}/>
      </button>
      {open && (
        <div className="w-screen h-max lg:h-screen absolute  top-0 left-0 right-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w[50%] 2xl:w-[40%] xl:mt-12">
            <Form />
            <button className="absolute top-4 right-4 cursor-pointer" onClick={()=>setOpen(false)}>
              <Image src='/close.png'  alt="close" width={16} height={16}/>
            </button>
          </div>
          
        </div>
      )}
    </div>
  )
}

