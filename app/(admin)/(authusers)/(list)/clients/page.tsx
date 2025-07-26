import Image from "next/image"
import Filter from '@/Assets/filter.png'
import Table from "@/app/(admin)/Components/Table"
import Link from "next/link"
import FormModal from "@/app/(admin)/Components/FormModal"
import View from '@/Assets/view.png'
import prisma from "@/lib/prisma"
import { client } from "@prisma/client"
import noAvatar from '@/public/noAvatar.png'
import { role } from "@/lib/utility"
import FormContainer from "@/app/(admin)/Components/FormContainer"
//optional


const columns = [
  {
    header : "Info",
    accessor: "info"
  },
  {
    header : "Client Id",
    accessor: "clientId",
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
 //rows for table
const renderRow = (item: client) => (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-200 text-sm hover:bg-[#EF3B3E4F]">
        <td className="flex item center gap-4 p-4">
        <Image src={item.img || noAvatar}
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
      <td>{item.clientid}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.location}</td>
      <td className="hidden lg:table-cell">{item.addressline1}</td>
      <td className="hidden xl:table-cell">{item.contactperson}</td>
      <td>
        <div className="flex item-center gap-2">
        <Link href={`clients/${item.id}`}>
            <button className="w-7 h-7 flex item-center justify-center ">
              <Image src={View} 
              alt='Profile View' 
              width={24} 
              height={24}
              />
            </button> 
            
          </Link>
          <Link href={`/list/client/${item.id}`} className="bg-gray-100 rounded-full"/>
            { role === "admin" && 
            <>
            <FormContainer table="client" type="delete" id={item.id}/>
            <FormContainer table="client" type="update" id={item.id}/>
            </>
            }
        </div>
      </td>
      </tr>
    )
export default async function ClientListPage() {
   
  const data =await  prisma.client.findMany()
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-3">
      {/** top headding and add button*/}
      <div className="w-ful flex  items-center justify-between">
        <div>
            <h2 className="lg:text-xl fond-medium">All Clients</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
            <button>
                <Image src={Filter} alt="Add New Client" width={24} height={24} className="cursor-pointer"/>
            </button>
        { role ==="admin" && 
          <FormModal table="client" type="create"/>
        }
        </div>
      </div>
      {/**clients List*/}
      <Table columns = {columns} renderRow = {renderRow} data={data}/>
    </div>
  )
}
