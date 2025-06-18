import Link from "next/link";
import { usePathname } from 'next/navigation'
interface NavLinksProps {
  isOpen: boolean;
}

export default function NavLinks({ isOpen }: NavLinksProps) {
  const path = usePathname()
  return (
    <nav>
      <div
        className={`absolute top-0 ${
          isOpen ? "left-[0%]" : "left-[-100%]"
        } min-h-[30vh] w-full lg:w-auto bg-gray-800/80 backdrop-blur-sm 
        flex items-center justify-center overflow-hidden transition-all duration-300 lg:static lg:min-h-fit lg:bg-transparent`}
      >
        <ul className="flex gap-8 md:gap-16 flex-col items-center lg:flex-row mt-8 md:mt-0">
          <li>
           <Link href='/' className={path.startsWith('/') ? 'text-main': 'text-white'}>Home</Link>
          </li>
          <li>
            <Link href='/about' className={path.startsWith('/about') ? 'text-main text-lg underline': 'text-white'}>About Us</Link>
          </li>
          <li>
            <Link href='/products' className={path.startsWith('/products') ? 'text-main text-lg underline': 'text-white'}>Products</Link>
          </li>
          <li>
            <Link href='/services' className={path.startsWith('/services') ? 'text-main text-lg underline': 'text-white'}>Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
