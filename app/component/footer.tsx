import { LiaCopyrightSolid } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png"
import {
    Footer,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
  
  export function FooterSection() {
    const year = new Date().getFullYear()
    return (
      <Footer container className="md:px-8 py-8 text-black mt-4 rounded-md">
        <div className="w-full md:px-12 px-2">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex items-center">
            <Link href='/'>
            <Image src={logo}
             alt="logo"
             width={140}
             />
            </Link>
            </div>
            <div className="grid grid-cols-2 sm:mt-4 sm:gap-4 md:grid-cols-3  items-center align-middle w-1/2">
            <div className="gap-y-4 ">
                <FooterLinkGroup className="flex flex-col text-center gap-y-6">
                  <span className="hover:text-primary translate hover:duration-300"><Link href='/about'>About Us</Link></span>
                  <span className="hover:text-primary translate hover:duration-300"><Link href='/products'>Products</Link></span>
                  <span className="hover:text-primary translate hover:duration-300"><Link href='/services'>Services</Link></span>
                </FooterLinkGroup>
              </div>
              <div className="">
                <FooterLinkGroup className="flex flex-col text-center gap-y-6">
                <span className="hover:text-primary translate hover:duration-300"><Link href='/'>Subscriptions</Link></span>
                <span className="hover:text-primary translate hover:duration-300"><Link href='/about'>Coustomer Service</Link></span>
                <span className="hover:text-primary translate hover:duration-300"><Link href='/login'>Join With Us</Link></span>
                </FooterLinkGroup>
              </div>
              <div className="">
                <FooterLinkGroup className="flex flex-col text-center gap-y-6">
                <span className="hover:text-primary translate hover:duration-300"><Link href='/about'>Contact Us</Link></span>
                <span className="hover:text-primary translate hover:duration-300"><Link href='/about'>Terms &amp; Conditions</Link></span>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between mt-4">
            <span className="flex text-sm md:text-lg"><LiaCopyrightSolid  className="text-2xl"/>Shenzor Industrial Company {year}</span>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon className="hover:text-primary hover:duration-300" href="#" icon={BsFacebook} />
              <FooterIcon className="hover:text-primary hover:duration-300" href="#" icon={BsInstagram} />
              <FooterIcon className="hover:text-primary hover:duration-300" href="#" icon={BsTwitter} />
              <FooterIcon className="hover:text-primary hover:duration-300" href="#" icon={BsGithub} />
              <FooterIcon className="hover:text-primary hover:duration-300" href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }
  