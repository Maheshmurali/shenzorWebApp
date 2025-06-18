
export default function Pagination() {
  return (
    <div>
      <button
      disabled
      className="py-2 px-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50
      disabled:cursor-not-allowed">
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-[#EF3B3E]">1</button>
        .....
      </div>
      <button className="py-2 px-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50
      disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  )
}
