'use client'
import Link from "next/link"
import Image from "next/image"
import logoImage from '@/public/logo.png'
import NavLinks from "./nav-links"
import userImg from '@/public/user.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react"
import { usePathname } from 'next/navigation'
import { useUser } from "@clerk/nextjs"

export default function MainHeader() {
  const [isopen, setIsOpen] = useState(false)
  const path = usePathname()
  const { user } = useUser()

  // Get custom role from user.publicMetadata
  const role = user?.publicMetadata?.role as string | undefined;
  const name= user?.publicMetadata?.name as string | undefined;

  return (
    <header className="px-12">
      <div className="flex justify-between px-6 md:px-12 bg-sub items-center py-4 fixed w-full top-0 left-0 z-50">
        <Link href='/'>
          <Image src={logoImage} width={150} height={100} alt="Logo image" />
        </Link>

        <NavLinks isOpen={isopen} />

        <div className="flex align-middle items-center gap-2">
          <Image src={userImg} alt="user image" height={32} />
          {role ? (
            <Link href='/profile' className={path.startsWith('/profile') ? 'text-yellow-600 text-lg underline' : 'text-white'}>
              { name || 'My Profile'}
            </Link>
          ) : (
            <Link href='/sign-in' className={path.startsWith('/sign-in') ? 'text-yellow-600 text-lg underline' : 'text-white'}>
              LogIn
            </Link>
          )}
        </div>

        <div onClick={() => setIsOpen(!isopen)} className="cursor-pointer lg:hidden z-50">
          {isopen ? <MdClose className="text-2xl text-main" /> : <GiHamburgerMenu className="text-2xl text-main" />}
        </div>
      </div>
    </header>
  )
}
