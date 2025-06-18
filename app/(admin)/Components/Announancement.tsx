
export default function Announancements({Announancement=[]}: {Announancement:{id:number; date:string; Announancement:string}[]}) {
    return (
      <div className="text-center p-4 bg-slate-200 ">
        <h2 className="font-medium text-lg">Announancements</h2>
        <div className="md:flex gap-4 lg:flex-col">
         {Announancement.map((item=>(
          <div className="text-xs text flex flex-col items-center justify-center odd:bg-[#EF3B3E91] py-2 rounded-md ring-1
          mt-2 bg-slate-100 px-2"
           key={item.id}>
            <span className="">{item.Announancement}</span>
          </div>
         )))}
         </div>
      </div>
    )
  }
  