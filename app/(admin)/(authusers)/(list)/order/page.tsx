import Image from "next/image"
// import Add from '@/Assets/create.png'
// import Filter from '@/Assets/filter.png'
import Table from "@/app/(admin)/Components/Table"
import Link from "next/link"
import { role } from "@/lib/utility"

//optional
type Order={
  id: number,
  name: string,
  companyId: string,
  orderId: string,
  phone: number,
  orderDetails: string,
  orderStatus: boolean
}

const columns = [
  {
    header : "Info",
    accessor: "info"
  },
  {
    header : "Order Id",
    accessor: "orderId",
    className: "",
  },
  {
    header : "Contact",
    accessor: "contactNumber",
    className: "hidden md:block",
  },
  {
    header : "order Details",
    accessor: "orderdetails",
    className: "hidden md:table-cell",
  },
  {
    header : "",
    accessor: "",
    className:"block md:hidden lg:hidden xl:hidden"
  },
  {
    header : "Actions",
    accessor: "actions",
    className:""
  },
]
export default function OrderListPage() {
    //rows for table
    const renderRow = (item: Order) => (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-200 text-sm hover:bg-[#EF3B3E4F]">
      <td className="flex item center gap-4 p-4">
        <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.companyId}</p>
        </div>
      </td>
      <td className="md:table-cell">{item.orderId}</td>
      <td className="lg:hidden xl:hidden md:hidden block"></td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.orderDetails}</td>
      <td>
        <div className="flex item-center gap-4">
          <Link href={`/list/client/${item.id}`}>
            <button className="px-4 py-2 flex item-center justify-center rounded-md bg-[#43C406C9] hover:bg-[#43C406]">
              <p className="text-white">Accept</p>
            </button>
          </Link>
          <Link href={`/list/client/${item.id}`} className="bg-gray-100 rounded-full">
            {role === "admin" && <button className="px-4 py-2 flex item-center justify-center rounded-md bg-[#F00000B5] hover:bg-[#F00000]">
              <p className="text-white">Decline</p>
            </button>}
          </Link>
        </div>
      </td>
      </tr>
    )

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-3">
      {/** top headding and add button*/}
      <div className="w-ful flex  items-center justify-between">
        <div>
            <h2 className="lg:text-xl fond-medium">All Orders</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
            <button>
                <Image src="/assets/filter.png" alt="Add New Client" width={24} height={24} className="cursor-pointer"/>
            </button>
        { role ==="admin" && <button className="w-8 h-8 flex justify-center items-center">
                 <Image src="/assets/create.png" alt="Add New Client" width={24} height={24} className="cursor-pointer"/>
            </button>}
        </div>
      </div>
      {/**clients List*/}
      <Table columns = {columns} renderRow = {renderRow} data={Orders}/>
    </div>
  )
}
