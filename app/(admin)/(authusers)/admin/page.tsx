
export default function adminPage(){
    return(
        <div className="flex flex-col md:flex-row p-4 mt-4">
            {/**left */}
            <div className="flex w-full lg:w-2/3 py-4">
                hello left
            </div>
           {/**right */}
           <div className="flex w-full lg:w-1/3 py-4">
                hello right
           </div>
        </div>
    )
}