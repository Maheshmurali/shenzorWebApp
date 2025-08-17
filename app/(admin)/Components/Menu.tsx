
import Link from "next/link"
import Image from "next/image"
import Home from '../../../assets/home.png'
import Clients from '../../../assets/clients.png'
import Partners from '../../../assets/partners.png'
import Products from '../../../assets/products.png'
import Services from '../../../assets/services.png'
import Shop from '../../../assets/shopping.png'
import Announancements from '../../../assets/announancements.png'
import Messages from '../../../assets/messages.png'
import Order from '../../../assets/order.png'
import Reset from '../../../assets/Reset.png'
import { currentUser } from "@clerk/nextjs/server"

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: Home, label: "HOME", href: "/profile" },
      { icon: Clients, label: "Clients", role: "admin", href: "/clients" },
      { icon: Partners, label: "Partners", role: "admin", href: "/partner" },
      { icon: Products, label: "Products", href: "/products" },
      { icon: Services, label: "Services", href: "/services" },
      { icon: Shop, label: "Shop", href: "/shop" },
      { icon: Order, label: "Order", role: "admin", href: "/order", count: 2 },
    ],
  },
  {
    title: "OTHERS",
    items: [
      { icon: Announancements, label: "Announcements", href: "/creator" },
      { icon: Messages, label: "Messages", href: "/messages", count: 1 },
      { icon: Reset, label: "Requests", role: "admin", href: "/requests", count: 1 },
    ],
  },
]

const Menu = async() => {
  const user = await currentUser()
  const role = user?.publicMetadata.role as string
  return (
    <div className="text-sm text-slate-500">
      {menuItems.map((section) => {
        const filteredItems = section.items.filter(
          (item) => !item.role || item.role === role
        )

        return (
          <div className="px-4 py-2 flex flex-col" key={section.title}>
            <span className="hidden lg:block">{section.title} </span>
            {filteredItems.map((links) => (
              <Link
                key={links.label}
                href={links.href}
                className="flex mt-1 items-center justify-center gap-4 py-2 rounded-md hover:bg-slate-200 lg:justify-start"
              >
                <Image src={links.icon} alt="" width={20} height={20} />
                {links.count ? (
                  <div className="items-center justify-center space-x-4 hidden lg:block">
                    <span>{links.label}</span>
                    <span className="bg-[#EF3B3E] text-white rounded-full px-2">
                      {links.count}
                    </span>
                  </div>
                ) : (
                  <span className="hidden lg:block">{links.label}</span>
                )}
              </Link>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Menu
