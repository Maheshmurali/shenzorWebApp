import Link from "next/link"
import Image from "next/image"
import Home from '@/Assets/home.png'
import Clients from '@/Assets/clients.png'
import Partners from '@/Assets/partners.png'
import Products from '@/Assets/products.png'
import Services from '@/Assets/services.png'
import Shop from '@/Assets/shopping.png'
import Announancements from '@/Assets/announancements.png'
import Messages from '@/Assets/messages.png'
import Order from '@/Assets/order.png'
import LogOut from '@/Assets/logout.png'
import Reset from '@/Assets/Reset.png'
import { role } from "@/lib/data"
const menuItems = [
    {
        title : "MENU",
        items: [
          {  icon: Home,
            label: "HOME",
            href: "/profile"
          },
          {  icon: Clients,
            label: "Clients",
            role: role,
            href: "/client",
          },
          {  icon: Partners,
            label: "Partners",
            role : role,
            href: "/partner"
          },
          {  icon: Products,
            label: "Products",
            href: "/products"
          },
          {  icon: Services,
            label: "Services",
            href: "/services"
          },
          {  icon: Shop,
            label: "Shop",
            href: "/shop"
          },
          {  icon: Announancements,
            label: "Announcements",
            role : role,
            href: "/creator"
          },
          {  icon: Messages,
            label: "Messages",
            role : role,
            href: "/messages",
            count: 1
          },
        ]
    },
    {
        title : "OTHRES",
        items : [
            {  icon: Order,
                label: "Order",
                role : role,
                href: "/order",
                count:2
              },
                  {  icon: Reset,
            label: "Requests",
            role : role,
            href: "/requests",
            count: 1
          },
              {  icon: LogOut,
                label: "LogOut",
                href: "/logout"
              },
        ]
    }
]

const Menu = () => {
  return (
    <div className=" text-sm text-slate-500">
      {menuItems.map((section) => {
        // Filter out items based on user role
        const filteredItems = section.items.filter(
          (item) => !item.role || item.role === "admin"
        );
        return (
          <div className="px-4 py-2 flex flex-col" key={section.title}>
            <span className="hidden lg:block">{section.title}</span>
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
        );
      })}
    </div>
  );
};

export default Menu;
