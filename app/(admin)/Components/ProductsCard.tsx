import React from 'react'

const Items = [
  { Id :"123",
    name : "RX400",
    type : "Product"
  },
   { Id :"124",
    name : "RX100",
    type : "Service"
  },
]

export default function ProductsCard() {
  return (
    <div className='w-full bg-gray-100 border rounded-md mt-4 '>
      <div className='px-8'>
       <div className=' flex items-center justify-between gap-8 p-4'>
        <div><h1>ID</h1></div>
        <div><h1>NAME</h1></div>
        <div><h1>TYPE</h1></div>
        </div>
      </div>
      {/** Product Service map div*/}
      <div className=''>
        {Items.map(items => 
          <div key={items.Id} className='px-12 flex items-center justify-between gap-8 p-4 odd:bg-slate-300 rounded-md hover:translate-y-1'>
            <div className=''>{items.Id}</div>
            <div>{items.name}</div>
            <div>{items.type}</div>
          </div>
        )}
      </div>
    </div>
  )
}
