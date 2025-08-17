"use client";
import about from "@/assets/About.jpg";
import logo from "@/public/logo.png"
import { motion } from "framer-motion";
import Image from "next/image";
import { Loading } from "@/components/ui/loading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string({
    required_error: "Please select a service type",
  }),
});

const PartnersList = [
  {
    id: 1,
    image: "/partners/ipek-bg.png",
    hyperlink: "https://ipek.at/",
    name: "iPEK® CCTV inspection robots",
  },
  {
    id: 2,
    image: "/partners/wincan-bg.png",
    hyperlink: "https://www.wincan.com/en/home-en/",
    name: " WinCan® Sewer inspection & management software",
  },
  {
    id: 3,
    image: "/partners/enz-bg.png",
    hyperlink: "https://www.enz.com/en/home",
    name: " enz® technik AG",
  },
  {
    id: 4,
    image: "/partners/ims-bg.png",
    hyperlink: "https://www.ims-robotics.de/en/home",
    name: " IMS ROBOTICS® Cutting & Jetting robots",
  },
  {
    id: 5,
    image: "/partners/kaiser-bg.png",
    hyperlink: "https://dietmarkaiser.com/en/",
    name: "dietmarkaiser® Sewer cleaning with water recycling",
  },
  {
    id: 6,
    image: "/partners/sortimo.png",
    hyperlink: "https://www.mysortimo.com/en/",
    name: "Van Racking Systems and Mobile Transport Solutions",
  },
  {
    id: 7,
    image: "/partners/envirobot-bg.png",
    hyperlink: "https://envirobot.com/en/",
    name: "JET-POWERED, STEERABLE HD VIDEO NOZZLE",
  },
   {
    id: 8,
    image: "/partners/falch.png",
    hyperlink: "https://www.falch.com/en/",
    name: "Water UHP jetting machines and accessories",
  },

];

export default function About() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      location: "",
      phone: "",
      serviceType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const loadProducts = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
      };
  
      loadProducts();
    }, []);
  
    if (isLoading) {
      return <Loading message="Fetching..." size="lg" />;
    }

  return (

    <main className="min-h-screen bg-drakGray mt-12">
      {/* Hero Section */}
      <section className="bg-[#000001] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-full flex gap-2 justify-center ">
                  <h1 className="text-xl md:text-3xl">ABOUT</h1>
               <Image
                  src={logo}
                  alt="Team at work"
                  className="w-32"
                />
            </div>
            <p className="text-sm md:text-2xl text-white max-w-2xl mx-auto">
              Leading the industry in pipeline inspection technology and
              innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="container py-16">
        <div className=" mx-auto px-4">
          <div className=" flex flex-col relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-500">
                
              </h2>
              <div className="relative">
                <Image
                  src={about}
                  alt="Team at work"
                  width={500}
                  height={300}
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-lg shadow-lg"
                />
                <div className="lg:absolute lg:top-96 xl:top-[24rem]">
                <p className="text-white mb-4 text-md text-xs md:text-sm mt-8 xl:text-xl">
                  Founded in 2016, SHENZOR® provides inspection solutions and
                  services for storm & sewer pipelines using SHENZOR® registered
                  systems and robots. In addition, we’re a trusted partner for
                  leading companies in the field of CCTV pipe inspection,
                  cleaning and rehabilitation; iPEK GmbH, IMS Robotics GmbH,
                  BWELL TECHNOLOGY, WinCan AG and Dietmar Kaiser AG. Our diverse
                  products portfolio enabled us to provide our customers with
                  solutions to challenges facing utility owners and operators,
                  albeit CCTV inspection, Multi-sensor inspection or specialized
                  UHP water jet cutting crawlers to remove solid obstructions
                  and deposits settled.
                </p>
                <p className="text-white mb-4 text-md text-xs md:text-sm mt-4 xl:text-xl">
                  In addition to providing inspection solutions, SHENZOR® also
                  provides technical support, local maintenance services both
                  preventive and corrective, training & certification through
                  our partnership with Develop Training UK.
                </p>
                <p className="text-white text-md text-xs md:text-sm mt-4 xl:text-xl">
                  spaur expertise together with forging strategic partnerships
                  with world-renowned brands in the field of sewer inspection &
                  management positioned SHENZOR as the go-to partner for Utility
                  owners and operating entities, both in KSA & the region.
                </p>
              </div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      
        <section className="lg:mt-40 xl:mt-64 py-4 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[200px] md:h-[300px] lg:h-[400px]"
           >
          <h1 className="text-white text-3xl font-bold">OUR PARTNERS</h1>
          <div className=" w-full p-4 flex justify-between flex-wrap lg:mt-4 blur-0">
            {PartnersList.map((items,index) => (
              <div
                key={items.id}
                className={`border border-b-1 border-t-0 border-gray-300 lg:p-2 p-4 w-1/3
                  ${index === 0 || 6 ? 'border-l-0' : ''}
                  ${index === items.id - 1 ? 'border-r-0' : ''}
                `}
                >
                <a href={items.hyperlink}>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <Image
                      src={items.image}
                      alt={items.name}
                      width={200}
                      height={200}
                      className="grayscale hover:grayscale-0 hover:transition-transform hover:duration-300 hover:scale-110"
                    />
                    <span className="text-white text-xs hidden lg:block">{items.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
          </motion.div>
        </section>
      

      {/* Contact Form */}
      <section id="contact" className="py-20 text-black mt-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-white">CONTACT US</h2>
            <div className="bg-darkGray border rounded-lg shadow-lg p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel  className="text-white">Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel  className="text-white">Location</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel  className="text-white">Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+(966) 55 000 0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel  className="text-white">Service Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger  className="text-white">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pipeline-inspection">
                              Pipeline Inspection
                            </SelectItem>
                            <SelectItem value="maintenance">
                              Maintenance
                            </SelectItem>
                            <SelectItem value="consulting">
                              Consulting
                            </SelectItem>
                            <SelectItem value="training">Training</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
