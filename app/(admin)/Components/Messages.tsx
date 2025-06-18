
export default function Messages({ClientMessages=[]}: {ClientMessages:{id:number; date:string; Message:string}[]}) {
  return (
    <div className="text-center p-4 bg-slate-200 mt-2">
      <h2 className="font-medium text-lg">Messages</h2>
      <div className="md:flex gap-4 lg:flex-col">
       {ClientMessages.map((item=>(
        <div className="text-xs text flex flex-col items-center justify-center even:bg-[#EF3B3E91] py-2 rounded-md ring-1
        mt-2 bg-slate-100 px-2"
         key={item.id}>
          <span className="">{item.Message}</span>
        </div>
       )))}
       </div>
    </div>
  )
}
