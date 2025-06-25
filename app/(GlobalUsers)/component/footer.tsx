
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png'
import { Phone, MessageSquareShare, Map, Facebook, Instagram, Linkedin} from "lucide-react";
import { BsTwitterX} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

  export function FooterSection() {
    const year = new Date().getFullYear()
    return (
      <footer className="bg-sub text-black py-12  px-8">
      <div className="mx-auto px-4 w-full md:flex ">
      <div className="md:w-1/2 flex flex-col">
        <Link href='/' className="">
            <Image src={logo} alt="footer logo" width={200} height={150}/>
        </Link>
        <p className="text-white mt-4">SHENZOR® excels in cutting-edge technology and advanced tools,
           <br />backed by over a decade of expertise.</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lx:grid-cols-3 gap-8 md:w-1/2 mt-4 md:mt-0">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/" className=" hover:text-main transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className=" hover:text-main transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className=" hover:text-main transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className=" hover:text-main transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto gap-x-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-5 text-white">
                  <span><Phone/> </span>
                  <p>+(966) 55 9845411</p>
              </li>
              <li className="flex items-center space-x-5 text-white">
                <span><MessageSquareShare /></span>
                 <p>info@shenzor.com</p>
              </li>
              <li className="flex items-center space-x-5 text-white">
                <span><Map /></span>
                <p>Riyadh,KSA</p>
              </li>
            </ul>
          </div>
          </div>
        </div>
       
      </div> 
      <div className="flex w-full align-middle justify-center items-center mt-4">
        <div className="flex space-x-6">
          <Link className="text-white hover:text-main" href='https://www.facebook.com/?locale=ar_AR'><Facebook /></Link>
          <Link className="text-white hover:text-main" href='https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1'><Instagram /></Link>
          <Link className="text-white hover:text-main" href='https://www.linkedin.com/'><Linkedin /></Link>
          <Link className="text-white text-xl hover:text-main" href='https://x.com/'><BsTwitterX /></Link>
          <Link className="text-white text-xl hover:text-main" href='https://www.whatsapp.com/?lang=ar_AR'><FaWhatsapp /></Link>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-main">
          <p>&copy; {year} SHENZOR®. All rights reserved.</p>
        </div>
        <div className=" text-center text-main cursor-pointer">
          <p>Privacy&policy</p>
        </div>
    </footer>

);
}
