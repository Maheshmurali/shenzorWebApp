
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png'
import { Phone, MessageSquareShare, Map, Facebook, Instagram, Linkedin} from "lucide-react";
import { BsTwitterX} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

  export function FooterSection() {
    const year = new Date().getFullYear()
    return (
      <footer className="bg-white text-black py-12 mt-12 px-8">
      <div className="mx-auto px-4 w-full md:flex ">
      <div className="md:w-1/2 ">
        <Link href='/'>
            <Image src={logo} alt="footer logo" />
        </Link>
        <p className="text-slate-300 mt-4">Shenzor excels in cutting-edge technology and advanced tools,
           <br />backed by over a decade of expertise.</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lx:grid-cols-3 gap-8 md:w-1/2 mt-4 md:mt-0">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-main transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-main transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-main transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-main transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto gap-x-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-5 text-gray-400">
                  <span><Phone/> </span>
                  <p>+(966) 55 9845411</p>
              </li>
              <li className="flex items-center space-x-5 text-gray-400">
                <span><MessageSquareShare /></span>
                 <p>info@shenzor.com</p>
              </li>
              <li className="flex items-center space-x-5 text-gray-400">
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
          <Link className="text-slate-400 hover:text-main" href='/'><Facebook /></Link>
          <Link className="text-slate-400 hover:text-main" href='/'><Instagram /></Link>
          <Link className="text-slate-400 hover:text-main" href='/'><Linkedin /></Link>
          <Link className="text-slate-400 text-xl hover:text-main" href='/'><BsTwitterX /></Link>
          <Link className="text-slate-400 text-xl hover:text-main" href='/'><FaWhatsapp /></Link>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {year} Shenzor. All rights reserved.</p>
        </div>
        <div className=" text-center text-gray-400 cursor-pointer">
          <p>Privacy&policy</p>
        </div>
    </footer>

);
}
