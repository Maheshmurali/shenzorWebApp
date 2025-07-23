import Complect from '@/Assets/statusok.png'
import InComplect from '@/Assets/statusno.png'
import Image from 'next/image'
import Link from 'next/link'
import {PreOrder, ClientMessages, Announancement} from '@/lib/data'
import Table from "@/app/(admin)/Components/Table"
import Messages from '@/app/(admin)/Components/Messages'
import Announancements from '@/app/(admin)/Components/Announancement'
import FormModal from '@/app/(admin)/Components/FormModal'
import { role } from '@/lib/utility'
type Order={
  id: number,
  orderItem: string,
  orderId: string,
  date: string,
  orderdetails: string,
  status: boolean,
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
    header : "Date",
    accessor: "Order Date",
    className: "hidden md:block",
  },
  {
    header : "order Details",
    accessor: "orderdetails",
    className: "hidden md:table-cell",
  },
  {
    header : "Status",
    accessor: "Orderstatus",
    className:""
  },

]
const UserData= 
{
  id: 1,
  Companyname: "Company Name",
  email: "qwer@email.com",
  phone: 12345687,
  managername: "Manager Name",
  Operatinglocations: [
    "Location1","Loaction2","Location3"
   ],
  address: "1234street,  Riyadh,   KSA",
  companyprofile: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  image: '/user.png'
}


export default function ClientProfilePage() {
   //rows for table
   const renderRow = (item: Order) => (
    <tr key={item.id} className="border-b border-gray-200 odd:bg-slate-400 text-sm hover:bg-[#EF3B3E4F]">
    <td className="flex item center gap-4 p-4">
      <div className="flex flex-col">
          <h3 className="font-semibold">{item.orderItem}</h3>
      </div>
    </td>
    <td className="md:table-cell">{item.orderId}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td className="hidden md:table-cell">{item.orderdetails}</td>
    {item.status?
    <td>
      <Image src={Complect} alt='ok' width={16} height={16}/></td>:
      <td><Image src={InComplect} alt='No' width={16} height={16}/>
    </td>}
    </tr>
  )
  
    return (
      <div className="flex-1 p-4 flex flex-col gap-4 lg:flex-row">
        {/**left */}
        <div className="w-full lg:w-2/3">
          {/**User Info Card */}
          <div className='flex bg-white px-4 py-4 rounded-md'>
             <div className='w-1/3'>
              <Image src={UserData.image} alt='Company Logo'width={120}  height={120} className='rounded-full'/>
             </div>
             <div className='w-2/3 flex flex-col gap-4 '>
             <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold'>{UserData.Companyname}</h1>
              {role === "admin" && 
              <FormModal table='client' type='update' />}
             </div>
             <div className='flex align-item justify-between'>
              <p className='text-gray-400'>{UserData.email}</p>
              <p className='text-gray-400'>{UserData.phone}</p>
             </div>
             <div className='w-full md:flex items-center justify-between '>
                {UserData.Operatinglocations.map((item=>(
                  <p className='text-gray-400' key={item}>{item}</p>
                )))}
             </div>
             <p className='text-gray-400'>{UserData.address}</p>
             </div>
          </div>
          {/**Bottom1 */}
            <div className='bg-white px-4 mt-4 rounded-md py-4'>
              <p className='text-xs text-gray-500 '>{UserData.companyprofile}</p>
            </div>
            <div className='mt-8'>
              <h1>Previous Orders</h1>
              <Table columns = {columns} renderRow = {renderRow} data={PreOrder}/>
            </div>
        </div>
        {/**right */}
        <div className="w-full lg:w-1/3 bg-white">
          <h1 className='w-full text-center'>Quick Links</h1>
        <div className='flex items-center justify-between gap-4 px-6 md:px-4 flex-wrap md:py-8 mt-4'>
         <div className='bg-slate-300 px-4 flex justify-center items-center rounded-md'><Link href='/profile'>Home</Link></div>
         <div className='bg-orange-100 px-4 flex justify-center items-center rounded-md'><Link href='/products'>Pdoducts</Link></div>
         <div className='bg-orange-100 px-4 flex justify-center items-center rounded-md'><Link href='/services'>Services</Link></div>
         <div className='bg-slate-300 px-4 flex justify-center items-center rounded-md'><Link href='/shop'>Shop</Link></div>
        </div>
        <div>
         <Messages ClientMessages = {ClientMessages}/>
        </div>
        <div>
        <Announancements Announancement = {Announancement}/>
        </div>
        </div>
      </div>
      
    )
  }
  