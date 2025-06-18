import Image from "next/image"
import Link from "next/link"
import Logo from '@/public/panellogo.png'
import Menu from "../Components/Menu"
import NavBAr from "../Components/NavBar"
import {role} from '@/lib/data'

export default function AuthUserLayout( {children} ){
    const userData = 
        {
            name : "Shenzor",
            role: role
        }
    
    return(
        <div className="h-screen flex">
            {/*Left*/}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
                <Link href='/' className="flex flex-col items-center justify-center gap-2 py-2">
                  <Image src={Logo} alt=""  width={26} height={26} className="rounded-lg"/>
                  <h2 className="hidden lg:block ">Shenzor</h2>
                </Link>
                <Menu />
            </div>
            {/*Right*/}
            <div  className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-slate-200 overflow-scroll ">
                <NavBAr username={userData} />
                {children}
            </div>
        </div>
    )
}