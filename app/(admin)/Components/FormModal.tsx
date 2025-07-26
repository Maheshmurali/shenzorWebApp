'use client'
import Image from "next/image";
import { Dispatch, SetStateAction, useActionState, useEffect, useState } from "react";
//import Clientform from "./Forms/ClientForm";
import dynamic from "next/dynamic";
import PartnerForm from "./Forms/PartnerForm";
import ProductsForm from "./Forms/ProductForms";
import ServiceForm from "./Forms/ServiceForm";
import { deleteClient } from "@/lib/serveractions";
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";
import { FormContainerProps } from "./FormContainer";


const deleteActionMap = {
  client : deleteClient,
  partner: deleteClient,
  service: deleteClient,
  product: deleteClient,
  order: deleteClient,
  Message: deleteClient,
}

//For loading animation
const Clientform = dynamic(()=> import("./Forms/ClientForm"),{
  loading:()=> <h1>Loading....</h1>
})
// for select tables 
const forms: {
  [key:string]:(setopen:Dispatch<SetStateAction<boolean>>, type: "create" | "update", data?:any, relatedData?: any) => JSX.Element;
 } ={
    client : (setOpen, type,  data, relatedData ) => <Clientform type={type} data={data} setopen={setOpen} relatedData={relatedData}/>,
    partner : (setOpen, type, data, relatedData ) => <PartnerForm type={type} data={data}  setopen={setOpen} relatedData={relatedData}/>,
    product : (setOpen, type, data,relatedData ) => <ProductsForm type={type} data={data}  setopen={setOpen} relatedData={relatedData} />,
    service : (setOpen, type, data,relatedData ) => <ServiceForm type={type} data={data}  setopen={setOpen} relatedData={relatedData}/>
}

export default function FormModal({
    table,
    type,
    data,
    id,
    relatedData,
}:FormContainerProps & {relatedData?: any}) {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const[open, setOpen] = useState(false)

    const Form = () => {

      const[state, formAction] = useActionState(deleteActionMap[table], {success: false, error: false})

        const router = useRouter()
        useEffect(()=>{
          if (state.success){
            toast(`Client has been deleted Success!`)
            setOpen(false)
            router.refresh()
          }
        },[state])

      return (
        type === "delete" && id ? (
          <form action={formAction} className="p-4 flex flex-col gap-4">
            <input type="text | number"  name="id" value={id} hidden/>
            <span className="text-center font-medium">
              All {table} data will be lost. Are you sure you want to delete this {table}?
            </span>
            <button className="bg-red-700 text-white px-4 py-2 rounded-md border-none w-max self-center">
              Delete
            </button>
          </form>
        ) : type === "create" || type === "update" ? (
          forms[table](setOpen, type, data, relatedData )
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

