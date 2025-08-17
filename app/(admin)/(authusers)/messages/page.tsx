import Image from "next/image"
import add from '../../../../assets/create.png'
import Table from "@/app/(admin)/Components/Table"
import { Messages} from '@/lib/data'

//optional
type Messages={
  id: number,
  companyname: string,
  Name: string,
  phone: string,
  email?: string,
  location: string,
  enquiry: string,
  contactperson: string, //multiple items should an array
  message?: string
}

const columns = [
  {
    header : "Info",
    accessor: "info"
  },
  {
    header : "Company Name",
    accessor: "companyname",
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
    header : "Type Of Enquiry",
    accessor: "type",
    className: "hidden lg:table-cell",
  },
  {
    header : "Message",
    accessor: "Remarks",
    className: "hidden lg:table-cell",
  },
]
export default function MessageListPage() {
    //for rows
    const renderRow = (item: Messages) => (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-200 text-sm hover:bg-[#EF3B3E4F]">
      <td className="flex item center gap-4 p-4">
        <div className="flex flex-col">
            <h3 className="font-semibold">{item.Name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td>{item.companyname}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.location}</td>
      <td className="hidden lg:table-cell">{item.enquiry}</td>
      <td className="hidden lg:table-cell">{item.message}</td>
      </tr>
    )

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-3">
      {/** top headding and add button*/}
      <div className="w-ful flex  items-center justify-between">
        <div>
            <h2 className="lg:text-xl fond-medium">All Messages</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
            <button>
                <Image src={add} alt="Add New Client" width={24} height={24} className="cursor-pointer"/>
            </button>
        </div>
      </div>
      {/**clients List*/}
      <Table columns = {columns} renderRow = {renderRow} data={Messages}/>
    </div>
  )
}
