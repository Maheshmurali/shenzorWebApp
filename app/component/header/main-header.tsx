'use client'
import Link from "next/link"
import Image from "next/image"
import logoImage from '@/public/logo.png'
import NavLinks from "./nav-links"
import user from '@/public/user.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react"
import { usePathname } from 'next/navigation'
export default function MainHeader(){
 const [isopen, setIsOpen] = useState(false)
const path = usePathname()
    return(
        <header className="">
            <div className="flex justify-between px-6 bg-darkblue items-center fixed w-full top-0 left-0 z-50">
            <Link className="" href='/'>
                <Image src={logoImage} width={132} height={122} alt="Logo image"></Image>
            </Link>
            <NavLinks isOpen={isopen} />
             <div className="flex align-middle items-center">
            <Image src={user} alt="uer image" height={32}></Image>
            <Link href='/login' className={path.startsWith('/login') ? 'text-yellow-600 text-lg underline': 'text-white'}>LogIn</Link>
            </div>
        <div onClick={() => setIsOpen(!isopen)} className="cursor-pointer lg:hidden z-50">
                {isopen ? <MdClose className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
         </div>
            </div>
        </header>
    )
}