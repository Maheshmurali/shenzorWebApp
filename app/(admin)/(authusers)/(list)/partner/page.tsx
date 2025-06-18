import Image from "next/image"
import Filter from '@/Assets/filter.png'
import Table from "@/app/(admin)/Components/Table"
import {role} from '@/lib/data'
import Link from "next/link"
import FormModal from "@/app/(admin)/Components/FormModal"
import View from '@/Assets/view.png'
import { partner } from "@prisma/client"
import prisma from "@/lib/prisma"
//optional
//For Impliment pagination take count of all item in data base use transation method(59:27)


const columns = [
  {
    header : "Info",
    accessor: "info"
  },
  {
    header : "Partner Id",
    accessor: "partnerId",
    className: "",
  },
  {
    header : "Contact",
    accessor: "contactNumber",
    className: "hidden md:table-cell",
  },
    {
    header : "Location",
    accessor: "location",
    className: "hidden lg:table-cell",
  },
  {
    header : "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Contct Person",
    access: "contactperson",
    className: "hidden xl:block"
  },
  {
    header : "Actions",
    accessor: "actions",
  },
]
 //for rows
 const renderRow = (item: partner) => (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-200 text-sm hover:bg-[#EF3B3E4F]">
      <td className="flex item center gap-4 p-4">
        <Image src={item.img || "/noAvatar.png"}
         alt="client image" 
         width={40} 
         height={40} 
        className="hidden md:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td>{item.partnerid}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.location}</td>
      <td className="hidden lg:table-cell">{item.location}</td>
      <td className="hidden xl:table-cell">{item.contactperson}</td>
      <td>
        <div className="flex item-center gap-2">
          <Link href={`/partner/${item.id}`}>
          <button className="w-7 h-7 flex item-center justify-center bg-slate-100 rounded-full">
              <Image src={View} 
              alt='Profile View' 
              width={24} 
              height={24}
              />
            </button>
          </Link>
          <Link href={`/list/partner/${item.id}`} className="bg-gray-100 rounded-full">
            {role === "admin" && 
            //<button className="w-7 h-7 flex item-center justify-center ">
              //<Image 
               // src={Delete} 
               // alt='Delete Client' 
               // width={24} 
               // height={24} 
               ///>
            //</button>
            <FormModal table="partner" type="delete" id={item.id}/>
            }
          </Link>
        </div>
      </td>
      </tr>
    )
export default async function PartnerListPage() {
   //getting all partners data fron database using findMany
  const data =await  prisma.partner.findMany()

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-3">
      {/** top headding and add button*/}
      <div className="w-ful flex  items-center justify-between">
        <div>
            <h2 className="lg:text-xl fond-medium">All Partners</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
            <button>
                <Image src={Filter} alt="Filter Partner" width={24} height={24} className="cursor-pointer"/>
            </button>
            {role === "admin" && 
             //<button className="w-8 h-8 flex justify-center items-center">
                // <Image src={Add} alt="Add New Partner" width={24} height={24} className="cursor-pointer"/>
            //</button>
            <FormModal table ="partner" type= "create"/>
            }
        </div>
      </div>
      {/**clients List*/}
      <Table columns = {columns} renderRow = {renderRow} data={data}/>
    </div>
  )
}
